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

    return (
        <div className={classes.buttons}>
            <div className={classes.btn}>
                <Button disabled={props.filter === "Positive"} onClick={() => changeFilter("Positive")}>Positive</Button>
            </div>
            <div className={classes.btn}>
                <Button disabled={props.filter === "Neutral"} onClick={() => changeFilter("Neutral")}>Neutral</Button>
            </div>
            <div className={classes.btn}>
                <Button disabled={props.filter === "Negative"} onClick={() => changeFilter("Negative")}>Negative</Button>
            </div>  
        </div>
    )
}

export default withStyles(styles)(TableButtons)
