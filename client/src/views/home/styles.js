
const styles = theme => ({
    root: {
        height: '100%',
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            overflowX: 'hidden'
        }
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
        marginBottom: 100,
        [theme.breakpoints.down("sm")]: {
            width: '90%',
            boxShadow: 'none',
            padding: 0,
            marginBottom: 20
        }
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
        [theme.breakpoints.down("sm")]: {
            fontSize: 32,
            color: theme.palette.text.main,
            width: '100%',
            textAlign: 'center'
        }
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
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
            color: theme.palette.text.main,
            width: '90%',
            textAlign: 'center',
            fontWeight: 400,
            marginBottom: 20
        }
    },
    inputForm: {
        margin: 10,
        
    },
    field: {
        width: 600,
        [theme.breakpoints.down("sm")]: {
            width: '90%'
        }
    },
    inputRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        height: 66, // Text Fields
        '& .MuiTextField-root': {
            width: 600,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 15,
            [theme.breakpoints.down("sm")]: {
                width: '100%'
            }
        },
        '& .MuiFilledInput-root': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 15,   
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
            [theme.breakpoints.down("sm")]: {
                boxShadow: 
                `inset 3px 3px 4px #464452,
                inset -3px -3px 4px #6a667a`,
            }
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
    searchIcon: {
        color: theme.palette.text.main,
        borderRadius: 12,
        height: 36,
        width: 36,
        [theme.breakpoints.down("sm")]: {
            height: 28,
            width: 28
        }
    },
    searchBtn: {
        marginLeft: 20,
        borderRadius: 12,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 10,
        },
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
            },
            [theme.breakpoints.down("sm")]: {
                height: 48,
                width: 52,
                boxShadow: 
                `2px 2px 3px #3a3843,
                -2px -2px 3px #767289`,
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
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 30,
        [theme.breakpoints.down("sm")]: {
            marginTop: 25,
            alignItems: 'flex-start'
        }
    },
    paramButton: {
        marginLeft: 20,
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            margin: "0px 10px 10px 0px"
        },
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
            [theme.breakpoints.down("sm")]: {
                boxShadow: 
                `2px 2px 3px #3a3843,
                -2px -2px 3px #767289`,
            }
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        },
        '& .Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.alt
        },
    },
    dropdownMenu: {
        height: 36,
        width: "auto",
        marginLeft: 20,
        paddingLeft: 8,
        backgroundColor: theme.palette.secondary.disabled,
        borderRadius: 12,
        boxShadow: 
            `5px 5px 7px #3a3843,
            -5px -5px 7px #767289`,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            boxShadow: 
            `2px 2px 3px #3a3843,
            -2px -2px 3px #767289`,
        },
        '& .MuiInput-underline': {
            border: 'none',
            borderColor: 'green',
            transition: 'none',
            "&:hover": {
                borderColor: 'green'
              },
        },
        '& .MuiOutlinedInput-root': {
            height: 36,
            backgroundColor: 'none',
            '& .MuiInputBase-input': {
                color: theme.palette.text.main,
                font: theme.typography.fontFamily
            },
        },
        '& .MuiSelect-icon': {
            color: theme.palette.text.main,
            marginTop: 0
        },
        "& .MuiOutlinedInput-input": {
            color: "none",
            border: 'none'
          },
          "& .MuiInputLabel-root": {
            color: "none",
            border: 'none'
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "none",
            border: 'none'
          },
        "&:hover .MuiOutlinedInput-input": {
            color: "none",
            border: 'none'
          },
          "&:hover .MuiInputLabel-root": {
            color: "none",
            border: 'none'
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: 'none',
            border: 'none'
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            border: 'none',
            backgroundColor: 'transparent'
          },
          "& .MuiInputLabel-root.Mui-focused": {
            border: 'none',
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 'none',
            backgroundColor: 'transparent'
          }
    },
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    }
  });
  export default styles;
  