
const styles = theme => ({
    root: {
        overflowY: "hidden",
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
        minWidth: 498
    },    
    itemThresh: {
        fontSize: 14,
        fontWeight: 500,
        color: theme.palette.text.main,
        marginLeft: 5,
        width: "10%"
    },
    itemText: {
        fontSize: 14,
        fontWeight: 300,
        color: theme.palette.text.main,
        width: "90%"
    }
  });
  export default styles;
  