import { React, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import styles from "./styles.js";
import PieChartComp from "../../components/PieChart/piechart"
import TweetTable from "../../components/TweetTable/tweetTable"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Home = (props) => {
    const [Query, setQuery] = useState("");
    const [Sentiment, setSentiment] = useState("");
    const [pieData, setPieData] = useState([]);
    const [tweetList, setTweetList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [Filter, setFilter] = useState("Positive");
    const { classes } = props;

    const handleSubmit = () => {
      if (Query !== "")
      {
         fetchTweets();
      }   
    };

    const fetchTweets = () => {
      fetch('/api/getTweets?query=' + Query)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoaded(true);
        setSentiment(data[0]);
        setPieData(data[1]);
        setTweetList(data[2])
      })
    }


    const ButtonsComp = () => {
      if (Filter === "Positive")
      {
        return (
          <div className={classes.buttons}>
            <Button variant="outlined" className={classes.btnActive} onClick={() => setFilter("Positive")}>Positive</Button>
            <Button onClick={() => setFilter("Neutral")}>Neutral</Button>
            <Button onClick={() => setFilter("Negative")}>Negative</Button>
          </div>
        )
      } else if (Filter === "Neutral") 
      {
        return (
          <div className={classes.buttons}>
            <Button onClick={() => setFilter("Positive")}>Positive</Button>
            <Button variant="outlined" className={classes.btnActive} onClick={() => setFilter("Neutral")}>Neutral</Button>
            <Button onClick={() => setFilter("Negative")}>Negative</Button>
          </div>
        )
      } else if (Filter === "Negative")
      {
        return (
          <div className={classes.buttons}>
            <Button onClick={() => setFilter("Positive")}>Positive</Button>
            <Button onClick={() => setFilter("Neutral")}>Neutral</Button>
            <Button variant="outlined" onClick={() => setFilter("Negative")}>Negative</Button>
          </div>
        )
      }
    }


    return (
      <div className={classes.root}>
        <Typography className={classes.title}>Welcome to the Twitter Sentiment Tool</Typography>
        <Typography className={classes.desc}>Enter a topic to find the overall sentiment on Twitter.</Typography>
        <form className={classes.input} noValidate autoComplete="off">
            <TextField 
                className={classes.field}
                label="Search"
                variant="outlined"
                value={Query}
                onChange={event => setQuery(event.target.value)}
            />
            <Button className={classes.button} onClick={() => handleSubmit()} variant="contained">Submit</Button>
        </form>
        
        {loaded && 
          <motion.div initial="hidden" animate="visible" variants={variants} className={classes.searchPane}>  
            <PieChartComp data={pieData} />
            <div className={classes.container}>
              <ButtonsComp />
              <div className={classes.dataTable}>
                <TweetTable data={tweetList} filterItem={Filter} />
              </div>
              
            </div>
          </motion.div>
        }
        {Sentiment}
      </div>
    );
}

export default withStyles(styles)(Home);
