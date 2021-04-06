const tf = require('@tensorflow/tfjs');


const predictSentiment = (text, model, metadata) => {
    const trimmed = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    const sequence = trimmed.map(word => {
      const wordIndex = metadata.word_index[word];
      if (typeof wordIndex === 'undefined') {
        return 2; //oov_index
      }
      return wordIndex + metadata.index_from;
    });
    const paddedSequence = padSequences([sequence], metadata);
    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
  
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    return score;
}

const padSequences = (sequences, metadata) => {
    return sequences.map(seq => {
        if (seq.length > metadata.max_len) {
        seq.splice(0, seq.length - metadata.max_len);
        }
        if (seq.length < metadata.max_len) {
        const pad = [];
        for (let i = 0; i < metadata.max_len - seq.length; ++i) {
            pad.push(0);
        }
        seq = pad.concat(seq);
        }
        return seq;
});
}

const computeThreshold = (intensity) => {
    let threshold = "";
    if (intensity > 0.66) 
    {
        threshold = "Positive";
    } 
    else if (intensity > 0.4) 
    {
        threshold = "Neutral";
    } 
    else 
    {
        threshold = "Negative"
    }
    return threshold;
}

// Helper function
const getAverage = (arr) => {
    let average;
    let total = 0;

    for (let i = 0; i < arr.length; i++)
    {
        total = total + arr[i].intensity;
    }
    average = total / arr.length;
    return average;
}

const getPieData = (arr) => {
  pieData = [];
  positive = 0;
  neutral = 0;
  negative = 0;

  // Checks incoming data and creates data for pie chart
  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].threshold == "Positive")
    {
      positive = positive + 1;
    } 
    else if (arr[i].threshold == "Neutral")
    {
      neutral = neutral + 1;
    } 
    else if (arr[i].threshold == "Negative")
    {
      negative = negative + 1;
    } 
    else {
      console.log("Error. Unknown case.")
    }
  }

  pieData = [
    { name: "Positive", value: positive },
    { name: "Neutral", value: neutral },
    { name: "Negative", value: negative }
  ];
  return pieData;
}

const getTableData = (arr) => {
  tableData = [];
  positive = 0;
  neutral = 0;
  negative = 0;
  tweetNum = 10;
  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].threshold == "Positive")
    {
      if (positive++ < tweetNum)
      {
        tableData.push(arr[i])
      }
    } 
    else if (arr[i].threshold == "Neutral")
    {
      if (neutral++ < tweetNum)
      {
        tableData.push(arr[i])
      }
    } 
    else if (arr[i].threshold == "Negative")
    {
      if (negative++ < tweetNum)
      {
        tableData.push(arr[i])
      }
    } 
  }
  
  return tableData;
}

// Main sentiment function
async function getResults(tweets, model, metadata) {
    let len = tweets.length;
    let scoreArr = [];
    let returnArr = [];
    let sentiment, intensity, threshold;

    // Retrieve array with individual scores 
    for (let i = 0; i < len; i++) {
        intensity = await predictSentiment(tweets[i].text, model, metadata);
        threshold = computeThreshold(intensity);
        scoreArr[i] = {'intensity': intensity, 'threshold': threshold, 'text': tweets[i].text};
    }

    // Get overall sentiment consensus on the topic
    sentiment = getAverage(scoreArr).toFixed(3);
    pieData = getPieData(scoreArr);
    tableData = getTableData(scoreArr);
    tweetCount = scoreArr.length;
    returnArr = [sentiment, pieData, tableData, tweetCount];
    return returnArr;
}


exports.getResults = getResults;