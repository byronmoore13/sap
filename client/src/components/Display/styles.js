
const styles = theme => ({
    divider: {
        width: 900,
        height: 0,
        backgroundColor: theme.palette.text.main,
        borderRadius: 5,
        marginTop: 40,
        marginBottom: 10
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
        alignItems: 'center',
        position: 'relative'
    },
    detailCont: {
        marginLeft: 90,
        marginBottom: 6,
        padding: 10,
        paddingLeft: 15,
        width: 240,
        minWidth: 100,
        borderRadius: 20,
        boxShadow: 
        `5px 5px 7px #464452,
        -5px -5px 7px #6a667a`,
    },
    details: {
        color: theme.palette.text.alt,
        fontSize: 20,
        fontWeight: 400,
        width: "auto"
    },
    detailsQuery: {
        color: theme.palette.text.main,
        fontSize: 32,
        fontWeight: 400,
        width: "auto"
    },
    raisedBackground: {
        height: 265,
        width: 265,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        top: 126,
        left: 87,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        zIndex: 10,
        boxShadow: 
        `6px 6px 12px #403e4a,
        -6px -6px 12px #706c82`,
    },
    tableContainer: {
        minHeight: 490,
        height: "auto",
        width: 500,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        margin: "0px 0px 10px 10px",
        padding: "10px 0px 10px 0px",
        borderRadius: 25,
    },
    dataTable: {
        overflowY: "visible",
        paddingRight: 2,
    },
    count: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        marginLeft: -50,
        top: "10%",
        left: "50%",
        textAlign: 'center',
        fontSize: 56,
        fontWeight: 600,
        color: theme.palette.text.main,
        lineHeight: 1.2,
        zIndex: 90
    },
    countDetails: {
        position: 'absolute',
        width: 100,
        marginLeft: -48,
        top: "55%",
        left: "50%",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.text.alt,
        lineHeight: 1.2,
        zIndex: 0
    }
  });
  export default styles;
  