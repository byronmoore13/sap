import { React, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Divider } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { motion } from "framer-motion"

// Local imports
import PieChartComp from "../../components/PieChart/piechart"
import TweetTable from "../../components/TweetTable/tweetTable"
import TableButtons from "../../components/TableButtons/tableButtons"
import styles from "./styles.js";

const Home = (props) => {
    const [Query, setQuery] = useState("");
    const [PrevQuery, setPrevQuery] = useState("");
    const [Sentiment, setSentiment] = useState("");
    const [pieData, setPieData] = useState([]);
    const [tweetList, setTweetList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [chartLoad, setChartLoad] = useState(false);
    const [Filter, setFilter] = useState("Positive");
    const [queryList, setQueryList] = useState([]);
    const { classes } = props;

    const handleFilter = (value) => {
      setFilter(value);
    }

  
    const handleSubmit = (event) => {
      console.log("here")
      console.log(Query)
      if (Query !== "")
      {
        // string.charAt(0).toUpperCase() + string.slice(1);
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
      fetch('/api/getTweets?query=' + Query)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setLoaded(true);
        setSentiment(data[0]);
        setPieData(data[1]);
        setTweetList(data[2]);
      })
    }


    return (
      <div className={classes.root}>
        <Typography className={classes.title}>Welcome to the Twitter Sentiment Tool</Typography>
        <Typography className={classes.desc}>Enter a topic to find the overall sentiment on Twitter.</Typography>
        <motion.div layout className={classes.activeContainer}>
            <form className={classes.input} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <motion.div layout className={classes.inputRow}>
                <TextField 
                    className={classes.field}
                    label="Search"
                    variant="outlined"
                    value={Query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <div className={classes.submitButton}>
                  <Button type="Submit">Submit</Button>
                </div>
              </motion.div>
            </form>
             
            {loading &&
              <div layout className={classes.searchPaneLoading}>
                <div className={classes.loadingLeft}>
                  <Skeleton style={{marginLeft: 85, marginTop: 20}} variant="rect" width={300} height={100} />
                  <Skeleton style={{marginLeft: 60, marginTop: 20}} variant="circle" width={350} height={350} />
                </div>
                <div className={classes.loadingTable}>
                    <Skeleton variant="rect" width={470} height={460} />
                </div>
              </div>
            }
            {loaded && 
            <div className={classes.contentRoot}>
              <Divider className={classes.divider} />
              <div layout className={classes.searchPane}> 
                <div className={classes.leftPane}>
                  {chartLoad &&
                    <div>
                      <div className={classes.detailCont}>
                        <Typography className={classes.details}>Search: {PrevQuery}</Typography>
                        <Typography className={classes.details}>Sentiment: {Sentiment}</Typography>
                      </div>
                      <PieChartComp data={pieData} />
                    </div>
                  }
                </div>
                <div className={classes.tableContainer}>
                  <TableButtons filter={Filter} onChange={handleFilter} />
                  <div className={classes.dataTable}>
                    <TweetTable  data={tweetList} filterItem={Filter} />
                  </div>
                </div>
              </div>
              </div>
            }
        </motion.div>
      </div>
    );
}

export default withStyles(styles)(Home);
