
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
        boxShadow: 
        `10px 10px 20px #403e4a,
        -10px -10px 20px #706c82`,
        padding: 15,
        borderRadius: 25,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 100
    },
    title: {
        fontSize: 66,
        fontWeight: 600,
        color: theme.palette.secondary.tint,
        marginTop: 26,
        letterSpacing: 3,
        lineHeight: 1,
        textShadow: 
        `6px 6px 12px #413f4b,
        -6px -6px 12px #6f6b81`,
    },
    desc: {
        fontSize: 24,
        fontWeight: 600,
        color: theme.palette.secondary.tint,
        marginTop: 10,
        marginBottom: 50,
        letterSpacing: 3,
        textShadow: 
        `6px 6px 12px #413f4b,
        -6px -6px 12px #6f6b81`,
    },
    inputForm: {
        margin: 20,
        height: 112, // Text Fields
        '& .MuiTextField-root': {
            width: 600,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 15,
        },
        '& .MuiFilledInput-root': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 15,   
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
        },
        '& .MuiFilledInput-underline:before': {
            border: "none"
        },
        '& .MuiFilledInput-underline:after': {
            border: "none"
        },
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
                borderRadius: 15,
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
    searchIcon: {
        color: theme.palette.text.main,
        borderRadius: 12,
        height: 36,
        width: 36,
    },
    searchBtn: {
        marginLeft: 20,
        borderRadius: 12,

        '& .MuiButton-root': {
            backgroundColor: theme.palette.accent.main,
            borderRadius: 12,
            height: 56,
            width: 72,        
            boxShadow: 
            `5px 5px 7px #3a3843,
            -5px -5px 7px #767289`,
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              filter: "brightness(.9)"
            }
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        },
        '& .Mui-disabled': {
            backgroundColor: theme.palette.primary.main
        },
    },
    settingsRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 30
    },
    paramButton: {
        marginLeft: 20,
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
        "&:active": {
            transform: "scale(.95)",
          },
        '& .MuiButton-root': {
            backgroundColor: theme.palette.secondary.disabled,
            borderRadius: 12,
            height: 36,
            width: "auto",
            boxShadow: 
            `5px 5px 7px #3a3843,
            -5px -5px 7px #767289`,
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        },
        '& .Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.alt
        },

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
        width: 400,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        margin: "0px 10px 50px 10px",
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
  