
const styles = theme => ({
    buttons: {
        width: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    btnPositive: {
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
            backgroundColor: theme.palette.secondary.disabled,
            borderRadius: 12,
            height: 36,
            width: "auto",
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        },
        '& .Mui-disabled': {
            backgroundColor: "#8CC784"
        },
    },
    btnNeutral: {
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
            backgroundColor: theme.palette.secondary.disabled,
            borderRadius: 12,
            height: 36,
            width: "auto",
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        },
        '& .Mui-disabled': {
            backgroundColor: "#5C84C3"
        },
    },
    btnNegative: {
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
            backgroundColor: theme.palette.secondary.disabled,
            borderRadius: 12,
            height: 36,
            width: "auto",
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        },
        '& .Mui-disabled': {
            backgroundColor: "#C35C5C"
        },
    }
  });
  export default styles;
  