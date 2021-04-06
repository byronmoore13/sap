const express = require('express');
const tf = require('@tensorflow/tfjs');
const fetch = require("node-fetch");
const path = require('path');
const Twitter = require('./twitter');
const NPMSentiment = require('./results_npm');
const TensorSentiment = require('./results_tensor');

// Init application
const app = express();


// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, 'client/build')));

// Tweet api
app.get('/api/getTweets', async(req, res) => {
    let verified, retweet, exact, hashtags = false;
    let keyword, queryString, sentimentTool = "";
    let tweets, results;

    keyword = req.query.keyword;
    verified = req.query.verified;
    retweet = req.query.retweet;
    exact = req.query.exact;
    hashtags = req.query.hashtags;
    sentimentTool = req.query.analysis;

    queryString = getQueryString(keyword, verified, retweet, exact, hashtags);

    // Pull tweets with renderTweets function
    tweets = await Twitter.fetchTweets(queryString);

    // if no tweets have been returned...
    if (tweets === undefined)
    {
        console.log("No tweets returned")
        res.json(-1);
    }
    else {
        // Perform sentiment analysis depending on user choice
        if (sentimentTool == "tensorflow") {
            console.log("Analysis type: Tensorflow")
            results = await TensorSentiment.getResults(tweets, loaded_model, loaded_metadata);
        } else {
            console.log("Analysis type: Sentiment Library via NPM")
            results = await NPMSentiment.getResults(tweets);
        }
        
        // Return data
        res.json(results)
        console.log("Sent results")
        console.log("")
    }
})


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
let loaded_model, loaded_metadata;

app.listen(port, function() {
  loadSentimentPackages();
});

console.log('App is listening on port ' + port);



// Helper Functions


// Format query string
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


// Load model from Google
const loadModel = async () => {
  const url = `https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json`;
  const model = await tf.loadLayersModel(url);
  return model;
};


// Load metadata from Google
const loadMetadata = async () => {
  try {
      const metadata = await fetch("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json")
      return metadata.json()
  } catch (err) {
    console.log(err);
  }
}


// Initialize the packages on load
const loadSentimentPackages = async () => {
  loaded_model = await loadModel();
  loaded_metadata = await loadMetadata();
  console.log("")
}