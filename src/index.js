import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#000000'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
  <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

