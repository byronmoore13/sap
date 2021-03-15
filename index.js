const express = require('express');
var Sentiment = require('sentiment');
const Twitter = require('twitter-v2');
require('dotenv/config');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Tweet api
app.get('/api/getTweets', async(req, res) => {
    let verified, retweet, exact, hashtags = false;
    let keyword, queryString = "";

    keyword = req.query.keyword;
    verified = req.query.verified;
    retweet = req.query.retweet;
    exact = req.query.exact;
    hashtags = req.query.hashtags;


    queryString = getQueryString(keyword, verified, retweet, exact, hashtags);

    // Pull tweets with renderTweets function
    let tweets = await fetchTweets(queryString);

    // if no tweets have been returned...
    if (tweets === undefined)
    {
        console.log("No tweets returned")
        res.json(-1);
    }
    else {
        // Process array with sentiment analysis
        let results = await getResults(tweets);
        // Return data
        res.json(results)
        console.log("Sent results")
        console.log("_____________")
    }
})


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);



// Helper Functions
const getQueryString = (keywordI, verifiedI, retweetI, exactI, hashtagsI) => {
  let queryString = keywordI;

  if (exactI == 1) {
      queryString = "\"" + queryString + "\"";
  }
  if (verifiedI == 1) {
    queryString = queryString + " is:verified";
  }
  if (retweetI == 1) {
    queryString = queryString + " -is:retweet";
  }
  if (hashtagsI == 1) {
    queryString = queryString + " has:hashtags";
  }
  return queryString;
}

// Start of twitter
const apikey = process.env.apikey;
const apiSecretKey = process.env.apikeysecret;
const bearerToken = process.env.bearertoken

const fetchTweets = async (field) => {
  try {
    // Initiate Twitter-v2 object
    const client = await new Twitter({
        consumer_key: apikey,
        consumer_secret: apiSecretKey,
        bearer_token: bearerToken,
    });
    // https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query
      const { data: tweets, meta, errors } = await client.get('tweets/search/recent', {
          query: '${rules} -is:reply lang:en'.replace('${rules}', field),
          max_results: 100,
          tweet: {
            fields: [
              'created_at',
              'text',
              'id'
            ],
          },
        }
      );
      console.log("Success! Tweets were on the topic of: " + field)
      return tweets;
  } catch (err) {
    console.log(err);
  }
}


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
  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].threshold == "Positive")
    {
      if (positive++ < 3)
      {
        tableData.push(arr[i])
      }
    } 
    else if (arr[i].threshold == "Neutral")
    {
      if (neutral++ < 3)
      {
        tableData.push(arr[i])
      }
    } 
    else if (arr[i].threshold == "Negative")
    {
      if (negative++ < 3)
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
    let sentiment, intensity, threshold;

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
