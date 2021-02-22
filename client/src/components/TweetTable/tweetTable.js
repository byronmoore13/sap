import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import styles from "./styles.js";

const TweetTable = (props) => {
    const data = props.data;
    const filterItem = props.filterItem;
    const { classes } = props;

    const TableLists = data.filter(function(item) {
        return item.threshold == filterItem;
    }).map((item) =>
        <div className={classes.itemContainer}>
            <Typography className={classes.itemThresh}>{item.intensity.toFixed(2)}</Typography> 
            <Typography className={classes.itemText}>{item.text}</Typography>   
        </div>
    );

    return (
        <div className={classes.table}>
            {TableLists}
        </div>
    )
}

export default withStyles(styles)(TweetTable);
