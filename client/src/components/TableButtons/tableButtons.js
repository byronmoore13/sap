import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "./styles"

// This component displays buttons
const TableButtons = (props) => {
    const { classes } = props;

    // handle props function to change filter
    const changeFilter = (changeVal) => {
        props.onChange(changeVal);
    }   

    // Conditionally render the buttons based on input
    if (props.filter === "Positive")
    {
        return (
        <div className={classes.buttons}>
            <div className={classes.activeBtn}>
                <Button onClick={() => changeFilter("Positive")}>Positive</Button>
            </div>
            <Button onClick={() => changeFilter("Neutral")}>Neutral</Button>
            <Button className={classes.inactiveBtn} onClick={() => changeFilter("Negative")}>Negative</Button>
        </div>
        )
    } else if (props.filter === "Neutral") 
    {
        return (
        <div className={classes.buttons}>
            <Button onClick={() => changeFilter("Positive")}>Positive</Button>
            <div className={classes.activeBtn}>
                <Button onClick={() => changeFilter("Neutral")}>Neutral</Button>
            </div>
            <Button onClick={() => changeFilter("Negative")}>Negative</Button>
        </div>
        )
    } else if (props.filter === "Negative")
    {
        return (
        <div className={classes.buttons}>
            <Button onClick={() => changeFilter("Positive")}>Positive</Button>
            <Button onClick={() => changeFilter("Neutral")}>Neutral</Button>
            <div className={classes.activeBtn}>
                <Button className={classes.activeBtn} onClick={() => changeFilter("Negative")}>Negative</Button>
            </div>
        </div>
        )
    }
}

export default withStyles(styles)(TableButtons)
