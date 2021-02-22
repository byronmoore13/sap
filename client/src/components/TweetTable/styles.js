
const styles = theme => ({
    table: {
      
    },
    itemContainer: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16,
        fontWeight: 300,
        color: theme.palette.text.main
    },
    itemThresh: {
        fontSize: 20,
        fontWeight: 500,
        color: theme.palette.text.main,
        marginRight: 10
    }
  });
  export default styles;
  