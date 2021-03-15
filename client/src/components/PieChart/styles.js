
const styles = theme => ({
    container: {
        margin: "0px 20px 0px 20px",
        position: 'relative'
    },
    count: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        marginLeft: -50,
        top: "22%",
        left: "50%",
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 600,
        color: theme.palette.text.main,
        lineHeight: 1.2,
        zIndex: 90
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
        lineHeight: 1.2,
        zIndex: 0
    }
  });
  export default styles;
  