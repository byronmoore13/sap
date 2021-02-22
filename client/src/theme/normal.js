import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }, 
  palette: {
    primary: {
      // dark
      main: '#212121',
    },
    secondary: {
      // light gray
      main: "#ABB2B9"
    },
    accent: {
      // purple
      main: '#C39BD3'
    },
    text: {
      // light
      main: '#ECF0F1',
      // gray
      alt: "#B3B6B7"
    }
  },
})

export default theme;