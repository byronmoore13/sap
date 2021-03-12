import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }, 
  palette: {
    primary: {
      // dark
      main: '#303030',
    },
    secondary: {
      // dark gray
      main: "#424242",
      // light gray
      alt: "#ABB2B9",
      disabled: "rgba(255, 255, 255, 0.3)",
      divider: "rgba(255, 255, 255, 1)"
    },
    accent: {
      // purple
      main: '#DB89FA'
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