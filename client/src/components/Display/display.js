import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Divider } from "@material-ui/core";

import PieChartComp from "components/PieChart/piechart"
import TweetTable from "components/TweetTable/tweetTable"
import TableButtons from "components/TableButtons/tableButtons"
import Counter from "components/Counter/counter"

import styles from "./styles"

const Display = (props) => {
    const { classes } = props;
    const pieData = props.pieData;
    const prevQuery = props.prevQuery;
    const sentiment = props.sentiment;
    const chartLoad = props.chartLoad;
    const filter = props.filter;
    const tweetList = props.tweetList;
    const tweetCount = props.tweetCount;

    const handleFilter = (input) => {
        props.onChange(input);
    }

    const renderPlus = (input) => {
        let result = "";
        if (input === 100) {
            result = "+"
        }
        
        return result;
    }

    return (    
        <div className={classes.contentRoot}>
            <Divider className={classes.divider} />
            <div layout className={classes.searchPane}> 
            <div className={classes.leftPane}>
                {chartLoad &&
                <div>
                    <div className={classes.raisedBackground}>
                        <Typography className={classes.count}>
                            <Counter style={{color: 'red'}} from={0} to={tweetCount} />
                            {renderPlus(tweetCount)}
                        </Typography>
                        <Typography className={classes.countDetails}>tweets in the last seven days</Typography>
                    </div>
                    <div className={classes.detailCont}>
                        <Typography className={classes.detailsQuery}>{prevQuery}</Typography>
                        <Typography className={classes.details}>Sentiment: {(sentiment * 100).toFixed(0)}% Positive</Typography>
                    </div>
                    <PieChartComp data={pieData}/>
                    
                </div>
                }
            </div>
            <div className={classes.tableContainer}>
                <TableButtons filter={filter} onChange={handleFilter} />
                <div className={classes.dataTable}>
                <TweetTable data={tweetList} filterItem={filter} />
                </div>
            </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Display);
