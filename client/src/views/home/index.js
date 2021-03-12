import { React, useState, useEffect } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Divider } from "@material-ui/core";
import { motion } from "framer-motion"

import SearchIcon from '@material-ui/icons/Search';

// Local imports
import Display from "components/Display/display"
import LoadingSkeleton from "components/Skeleton/skeleton"
import styles from "./styles.js";

const Home = (props) => {  
    const { classes } = props;

    const [Query, setQuery] = useState("");
    const [PrevQuery, setPrevQuery] = useState("");

    const [Filter, setFilter] = useState("Positive");
    const [Sentiment, setSentiment] = useState("");
    const [pieData, setPieData] = useState([]);
    const [tweetList, setTweetList] = useState([]);
    const [tweetCount, setTweetCount] = useState(0);
    const [error, setError] = useState(false);

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [chartLoad, setChartLoad] = useState(false);

    const [paramsObj, setParamsObj] = useState({
      verified: false,
      retweet: false,
      exact: false,
      hashtags: false
    });

    const handleFilter = (value) => {
      setFilter(value);
    }

    const handleBoolean = (bool) => {
      if (bool) {
        return 1;
      }
      else {
        return 0;
      }
    }
  
    const handleSubmit = (event) => {
      console.log("here")
      console.log(Query)
      if (Query !== "")
      {
        // string.charAt(0).toUpperCase() + string.slice(1);
        setError(false);
        setLoaded(false);
        setLoading(true);
        setChartLoad(false);
        setFilter("Positive");
        setPrevQuery(Query.charAt(0).toUpperCase() + Query.slice(1));
        setQuery("");
        setTimeout(() => {fetchTweets();}, 500)
        setTimeout(() => {setChartLoad(true);}, 1000)
      }   
      event.preventDefault();
    };

    const fetchTweets = () => {
      axios.get('/api/getTweets', { params:{ 
        keyword: Query,
        verified: handleBoolean(paramsObj.verified),
        retweet: handleBoolean(paramsObj.retweet),
        exact: handleBoolean(paramsObj.exact),
        hashtags: handleBoolean(paramsObj.hashtags)
      }})
      .then((response) => {
        let data = response.data;
        if (data === -1)
        {
          setError(true);
          console.log("error shit")
        } else
        {
          setLoading(false);
          setLoaded(true);
          setSentiment(data[0]);
          setPieData(data[1]);
          setTweetList(data[2]);
          setTweetCount(data[3]);
        }
        
      }).catch((error) => {
        console.error(error);
      });
    }


    return (
      <div className={classes.root}>
        <Typography className={classes.title}>Welcome to the Twitter Sentiment Tool</Typography>
        <Typography className={classes.desc}>Enter a topic to find the overall sentiment on Twitter.</Typography>
        <motion.div layout className={classes.activeContainer}>
            <form className={classes.inputForm} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <motion.div layout>
                <div className={classes.inputRow}>
                    <TextField 
                        className={classes.field}
                        label="Search"
                        variant="outlined"
                        value={Query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                  <div className={classes.searchBtn}>
                    <Button disabled={Query === ""} type="submit">
                        <SearchIcon  className={classes.searchIcon} />
                    </Button>
                  </div>
                </div>
                <div className={classes.settingsRow}>
                    <div className={classes.paramButton} onClick={() => setParamsObj({...paramsObj, verified: !paramsObj.verified})}>
                      <Button disabled={!paramsObj.verified}>Verified</Button>
                    </div>
                    <div className={classes.paramButton} onClick={() => setParamsObj({...paramsObj, retweet: !paramsObj.retweet})}>
                      <Button disabled={!paramsObj.retweet}>No Retweets</Button>
                    </div>
                    <div className={classes.paramButton} onClick={() => setParamsObj({...paramsObj, exact: !paramsObj.exact})}>
                      <Button disabled={!paramsObj.exact}>Exact Phrase</Button>
                    </div>
                    <div className={classes.paramButton} onClick={() => setParamsObj({...paramsObj, hashtags: !paramsObj.hashtags})}>
                      <Button disabled={!paramsObj.hashtags}>Has Hashtags</Button>
                    </div>
                </div>
                
              </motion.div>
            </form>
            {error && <Typography>No tweets returned. Try again</Typography>}
            {loading && <LoadingSkeleton /> }
            {loaded && <Display tweetCount={tweetCount} chartLoad={chartLoad} prevQuery={PrevQuery} sentiment={Sentiment} filter={Filter} tweetList={tweetList} onChange={handleFilter} pieData={pieData}/> }
        </motion.div>
      </div>
    );
}

export default withStyles(styles)(Home);
