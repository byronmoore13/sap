
const styles = theme => ({
    divider: {
        width: 900,
        height: 0,
        backgroundColor: theme.palette.text.main,
        borderRadius: 5,
        margin: "20px 0px"
    },
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    searchPane: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 980
    },
    leftPane: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    detailCont: {
        marginLeft: 100,
    },
    details: {
        color: theme.palette.text.alt,
        fontSize: 20,
        fontWeight: 400
    },
    detailsQuery: {
        color: theme.palette.text.main,
        fontSize: 32,
        fontWeight: 400
    },
    tableContainer: {
        minHeight: 470,
        height: "auto",
        width: 500,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        margin: "0px 30px 50px 10px",
        padding: "10px 0px 10px 0px",
        borderRadius: 25,
    },
    dataTable: {
        overflowY: "visible",
        paddingRight: 2,
        
    }
  });
  export default styles;
  