
const styles = theme => ({
    root: {
    },
    buttons: {
        width: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 20,
        '& .MuiButton-text': {
            color: theme.palette.text.main
        }
    },
    activeBtn: {
        '& .MuiButton-root': {
            backgroundColor: theme.palette.primary.main
        },
        '& .MuiButton-text': {
            color: theme.palette.text.main
        }
    }
  });
  export default styles;
  