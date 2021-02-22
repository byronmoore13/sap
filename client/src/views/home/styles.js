
const styles = theme => ({
    root: {
        height: '100%',
        width: "100%",
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
        marginTop: 8
    },
    input: {
        marginTop: 50,
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
    button: {
        marginLeft: 10,
        marginTop: 8
    },
    searchPane: {
        display: 'flex',
        flexDirection: 'row'
    },
    container: {
        height: 600,
        width: 600,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        margin: "50px 20px 50px 100px",
        padding: "10px 0px 10px 0px",
        borderRadius: 25,
        backgroundColor: theme.palette.secondary.main
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    dataTable: {
        overflowY: "auto",
        marginLeft: 30,
        marginRight: 30,
        paddingRight: 2
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
  