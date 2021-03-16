
const styles = theme => ({
    searchPaneLoading: {
        display: 'flex',
        flexDirection: 'row',
        width: 980,
        height: 560,
        justifyContent: "space-between",
        paddingTop: 50
    },
    loadingLeft: {
        '& .MuiSkeleton-rect': {
            margin: 20,
            borderRadius: 20,
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
        },
        '& .MuiSkeleton-circle': {
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
        }
    },
    loadingTable: {
        '& .MuiSkeleton-rect': {
            margin: 20,
            borderRadius: 20,
            boxShadow: 
            `inset 5px 5px 7px #464452,
            inset -5px -5px 7px #6a667a`,
        }
    }
  });
  export default styles;
  