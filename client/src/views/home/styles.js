
const styles = theme => ({
    root: {
        height: '100%',
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    activeContainer: {
        backgroundColor: theme.palette.secondary.main,
        padding: 10,
        borderRadius: 25,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        color: theme.palette.text.main,
        marginTop: 36
    },
    desc: {
        fontSize: 18,
        fontWeight: 300,
        color: theme.palette.text.main,
        marginTop: 8,
        marginBottom: 40
    },
    input: {
        margin: 20,
        height: 56,
        '& label.Mui-focused': {
        color: theme.palette.text.main,
        },
        '& .MuiInputBase-input': {
            color: theme.palette.text.main,
        },
        '& .MuiFormLabel-root': {
            color: theme.palette.text.main,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.text.main,
                borderRadius: 25,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.text.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.text.main,
            },
        },
    },
    field: {
        width: 600,
    },
    inputRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
    },
    submitButton: {
        marginLeft: 20,
        '& .MuiButton-root': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 6,
            height: 40,
            width: 80
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        }
    },
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
        marginTop: 20,
    },
    searchPaneLoading: {
        display: 'flex',
        flexDirection: 'row',
        width: 980,
        height: 530,
        justifyContent: "space-between"
    },
    loadingLeft: {
        '& .MuiSkeleton-rect': {
            margin: 20,
            borderRadius: 20
        }
    },
    loadingTable: {
        '& .MuiSkeleton-rect': {
            margin: 20,
            borderRadius: 20
        }
    },
    details: {
        color: theme.palette.text.main,
        fontSize: 20,
        fontWeight: 500
    },
    tableContainer: {
        minHeight: 470,
        height: "auto",
        width: 500,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        margin: "0px 20px 50px 10px",
        padding: "10px 0px 10px 0px",
        borderRadius: 25,
    },
    dataTable: {
        overflowY: "visible",
        paddingRight: 2,
        
    },
    buttons: {
        width: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 10
    }
  });
  export default styles;
  