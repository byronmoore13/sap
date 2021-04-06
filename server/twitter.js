require('dotenv/config');
const Twitter = require('twitter-v2');


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


exports.fetchTweets = fetchTweets;