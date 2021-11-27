import * as React from 'react';
import { createContext, useMemo, useState, useEffect } from 'react';
import './App.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './Header';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Balance from './Balance';
import Income from './Income';
import Expense from './Expense';
import List from './List';
import Modal from './Modal';
import Store from '../context/Store';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <Store>
      
      <Header ColorModeContext={ColorModeContext} />

      <Container maxWidth="sm" sx={{ mt: 2, marginBottom: '88px' }}>

        <Typography id="overview-heading" variant="h6" component="h2" sx={{ my: 2, fontWeight: 'light' }}>Overview</Typography>

        <Balance />

        <Grid aria-labelledby="overview-heading" container spacing={2}>

          <Grid item xs={6} sm={6}>
            <Income />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Expense />
          </Grid>
        </Grid>
        
        <List />
        
      </Container>

      <Modal />

    </Store>
  );
}

export default function ToggleColorMode() {
  // Theme mode state
  const [mode, setMode] = useState();

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setMode(localStorage.getItem('theme'));
    } else {
      localStorage.setItem('theme', 'light');
      setMode('light');
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => {
          if (prevMode === 'light') {
            localStorage.setItem('theme', 'dark');
            return 'dark';
          } else {
            localStorage.setItem('theme', 'light');
            return 'light';
          }
        });
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                background: {
                  default: grey[50]
                }
              }
            : {
                // palette values for dark mode
              }),
        }
      }),
    [mode],
  );

  theme = responsiveFontSizes(theme, {factor: 1});

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}