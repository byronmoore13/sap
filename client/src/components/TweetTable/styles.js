
const styles = theme => ({
    root: {
        overflowY: "hidden",
        minHeight: 420,
    },
    table: {
        overflowX: "hidden",
        overflowY: "hidden",
    },
    itemContainer: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        maxWidth: 480,
        minWidth: 470,
        boxShadow: 
        `inset 5px 5px 7px #464452,
        inset -5px -5px 7px #6a667a`,
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
        borderRadius: "50%"
    },
    itemText: {
        fontSize: 14,
        fontWeight: 300,
        color: theme.palette.text.main,
        width: "90%"
    }
  });
  export default styles;
  