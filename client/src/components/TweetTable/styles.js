
const styles = theme => ({
    root: {
        overflowY: "auto",
        minHeight: 410,
        maxHeight: 420,
        paddingRight: 10,
        '&::-webkit-scrollbar-track': {
            borderRadius: 10,
            backgroundColor: 'none'
        },
        '&::-webkit-scrollbar': {
            width: 6,
            backgroundColor: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 10,
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
            backgroundColor: theme.palette.text.alt
        }
    },
    table: {
        overflowY: "hidden"
    },
    itemContainer: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        maxWidth: 460,
        minWidth: 450,
        boxShadow: 
        `inset 5px 5px 7px #464452,
        inset -5px -5px 7px #6a667a`,
        [theme.breakpoints.down("sm")]: {
            minWidth: "90%",
            maxWidth: "95%",
            boxShadow: 
            `inset 3px 3px 4px #464452,
            inset -3px -3px 4px #6a667a`,
        }
    },    
    itemThresh: {
        fontSize: 14,
        fontWeight: 500,
        color: theme.palette.text.main,
        marginleft: 5,
        marginRight: 10,
        width: 40,
        height: 40,
        lineHeight: 2.8,
        textAlign: "center",
        borderRadius: "50%",
        [theme.breakpoints.down("sm")]: {
           
        }
    },
    itemText: {
        fontSize: 14,
        fontWeight: 300,
        color: theme.palette.text.main,
        width: "90%",
        [theme.breakpoints.down("sm")]: {
            fontSize: 12
        }
    }
  });
  export default styles;
  