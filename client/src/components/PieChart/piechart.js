import React, { useState, useEffect } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styles from "./styles"

// [positive, neutral, negative]
// green, blue, red
const COLORS = ["#8CC784", "#5C84C3", "#C35C5C"];

const PieChartComp = (props) => {
    const { classes } = props;
    const data = props.data;
    const tweetCount = props.tweetCount

    const renderPlus = (input) => {
        if (input === 100) {
            return "+";
        }
    }

    return (
        <div className={classes.container}>
            <PieChart width={400} height={360}>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36}/>
                <Tooltip contentStyle={{backgroundColor: '#ECF0F1', border: 'none', borderRadius: 5}} cursor={{ stroke: 'red', strokeWidth: 2 }} />
            </PieChart>
            <Typography className={classes.count}>{tweetCount}{renderPlus(tweetCount)}</Typography>
            <Typography className={classes.countDetails}>tweets in the last seven days</Typography>
        </div>

    )
}

export default withStyles(styles)(PieChartComp)
