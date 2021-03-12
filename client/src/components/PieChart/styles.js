
const styles = theme => ({
    container: {
        margin: "0px 20px 0px 20px",
        position: 'relative'
    },
    count: {
        position: 'absolute',
        width: 100,
        marginLeft: -50,
        marginTop: -25,
        top: "40%",
        left: "50%",
        textAlign: 'center',
        fontSize: 46,
        fontWeight: 600,
        color: theme.palette.text.main,
        lineHeight: 1.2
    },
    countDetails: {
        position: 'absolute',
        width: 100,
        marginLeft: -48,
        top: "48%",
        left: "50%",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.text.alt,
        lineHeight: 1.2
    }
  });
  export default styles;
  