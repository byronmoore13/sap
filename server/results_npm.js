var Sentiment = require('sentiment');


// Start of Sentiment
const computeIntensity = async (text) => {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);
    return result;
}

const computeThreshold = (intensity) => {
    let threshold = "";
    if (intensity >= 0.1)
    {
        threshold = "Positive";
    } else if (intensity <= -0.1) {
        threshold = "Negative";
    }  else {
        threshold = "Neutral"
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
async function getResults(tweets) {
    let len = tweets.length;
    let scoreArr = [];
    let returnArr = [];
    let sentiment, intensity, threshold, temp;

    

    // Retrieve array with individual scores 
    for (let i = 0; i < len; i++) {
        intensity = await computeIntensity(tweets[i].text);
        threshold = computeThreshold(intensity.comparative);
        scoreArr[i] = {'intensity': intensity.comparative, 'threshold': threshold, 'text': tweets[i].text};
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