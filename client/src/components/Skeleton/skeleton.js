import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "./styles"

const LoadingSkeleton = (props) => {
    const { classes } = props;

    return (
        <div layout className={classes.searchPaneLoading}>
            <div className={classes.loadingLeft}>
            <Skeleton style={{marginLeft: 100, marginTop: 20}} variant="rect" width={265} height={100} />
            <Skeleton style={{marginLeft: 100, marginTop: 20}} variant="circle" width={265} height={265} />
            </div>
            <div className={classes.loadingTable}>
                <Skeleton variant="rect" width={470} height={460} />
            </div>
        </div>
    )
}

export default withStyles(styles)(LoadingSkeleton);
