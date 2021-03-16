import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Titillium Web, sans-serif'
  },
  palette: {
    primary: {
      // dark
      main: '#585566',
    },
    secondary: {
      // dark gray
      main: "#585566",
      tint: "#97959F",
      disabled: "#42404D",
      divider: "rgba(255, 255, 255, 1)"
    },
    accent: {
      // dark purple
      main: '#42404D'
    },
    text: {
      // light
      main: '#E7E7EA',
      // gray
      alt: "#97959F"
    }
  },
})

export default theme;