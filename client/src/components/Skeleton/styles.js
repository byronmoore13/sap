
const styles = theme => ({
    searchPaneLoading: {
        display: 'flex',
        flexDirection: 'row',
        width: 980,
        height: 'auto',
        justifyContent: "space-between",
        paddingTop: 50,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    loadingLeft: {
        '& .MuiSkeleton-rect': {
            margin: 20,
            marginLeft: 100,
            marginBottom: 10,
            borderRadius: 20,
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
            [theme.breakpoints.down("sm")]: {
                margin: 0
            }
        },
        '& .MuiSkeleton-circle': {
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
        }
    },
    loadingSkelQueryPanel: {
         width: 265,
         height: 100,
         [theme.breakpoints.down("sm")]: {
            marginLeft: 0
        }
    },
    loadingSkelPie: {
        marginLeft: 100, 
        marginTop: 20,
        width: 265,
        height: 265,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0
        }
    },
    loadingTable: {
        '& .MuiSkeleton-rect': {
            margin: 20,
            marginRight: 40,
            borderRadius: 20,
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
            [theme.breakpoints.down("sm")]: {
                margin: "20px 0px",
                width: "70vw"
            }
        }
    },
    loadingTableSkel: {
        width: 420,
        height: 400,
        [theme.breakpoints.down("sm")]: {
            height: 100
        }
    }
  });
  export default styles;
  