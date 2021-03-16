import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion"
import styles from "./styles.js";
import TableButtons from "../TableButtons/tableButtons"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemObj = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  
const TweetTable = (props) => {
    const data = props.data;
    const filterItem = props.filterItem;
    const { classes } = props;

    const renderColor = () => {
        if (filterItem === "Positive") {
          return "#90BE94";
        } else if (filterItem === "Neutral") {
          return "#90A4BE";
        } else {
          return "#BE90A0";
        }
    }

    return (
        <div className={classes.root}>
            <motion.div initial="hidden" animate="visible" variants={container} className={classes.table} style={{overflowY: "hidden"}}>
                {
                    data.filter(function(item) { return item.threshold == filterItem;})
                    .map((item) =>
                        <motion.div variants={itemObj} className={classes.itemContainer}>
                            <Typography style={{backgroundColor: `${renderColor()}`}} className={classes.itemThresh}>{(item.intensity * 100).toFixed(0)}%</Typography> 
                            <Typography className={classes.itemText}>{item.text}</Typography>   
                        </motion.div>
                    )
                }
            </motion.div>
        </div>
        
    )
}

export default withStyles(styles)(TweetTable);
