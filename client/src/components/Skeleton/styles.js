
const styles = theme => ({
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
    }
  });
  export default styles;
  