import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

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
})

ReactDOM.render(
  <React.StrictMode>
  <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

