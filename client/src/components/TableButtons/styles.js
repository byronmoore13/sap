
const styles = theme => ({
    buttons: {
        width: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 10,
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    },
    btn: {
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          filter: "brightness(.8)"
        },
        "&:active": {
            transform: "scale(.95)",
        },
        marginBottom: 20,
        cursor: "pointer",
        '& .MuiButton-root': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 12,
            height: 36,
            width: "auto",            
            boxShadow: 
            `7px 7px 14px #3e3c47,
            -7px -7px 14px #726f85`,
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
            backgroundColor: theme.palette.secondary.disabled,
        },
    }
  });
  export default styles;
  