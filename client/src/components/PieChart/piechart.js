import React, { useState, useEffect } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Counter from "components/Counter/counter"
import styles from "./styles"

// [positive, neutral, negative]
// green, blue, red
const COLORS = ["#90BE94", "#90A4BE", "#BE90A0"];

const PieChartComp = (props) => {
    const { classes } = props;
    const data = props.data;
    const tweetCount = props.tweetCount

    return (
        <div className={classes.container}>
            <PieChart width={400} height={360}>
                <Pie
                data={data}
                cx="50%"
                cy="48%"
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
                <Tooltip coordinate={{x: 100, y: 100}} contentStyle={{backgroundColor: '#ECF0F1', border: 'none', borderRadius: 5, zIndex: 1000}} cursor={{ stroke: 'red', strokeWidth: 2 }} />
            </PieChart>
        </div>

    )
}

export default withStyles(styles)(PieChartComp)
