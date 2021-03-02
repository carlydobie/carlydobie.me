import { createMuiTheme } from '@material-ui/core';

export default function myTheme() {
    const theme = createMuiTheme({
        palette: {
          primary: {
            light: '#bebebe',
            main: '#5c5c5c',
            dark: '#000000'
          },
          secondary: {
            main: '#ffffff'
          }
        },
      });

      return theme
}
