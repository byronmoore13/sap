import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "./styles"

const LoadingSkeleton = (props) => {
    const { classes } = props;

    return (
        <div layout className={classes.searchPaneLoading}>
            <div className={classes.loadingLeft}>
                <Skeleton className={classes.loadingSkelQueryPanel} variant="rect" />
                <Skeleton className={classes.loadingSkelPie} variant="circle" />
            </div>
            <div className={classes.loadingTable}>
                <Skeleton className={classes.loadingTableSkel} variant="rect" />
            </div>
        </div>
    )
}

export default withStyles(styles)(LoadingSkeleton);
