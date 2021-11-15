import * as React from 'react';
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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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
        
        <Typography id="recent-transactions-heading" variant="h6" component="h2" sx={{ my: 2, fontWeight: 'light' }}>Recent Transactions</Typography>

        <List />
        
      </Container>

      <Modal />

    </Store>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                background: {
                  default: grey[100]
                }
              }
            : {
                // palette values for dark mode
              }),
        }
      }),
    [mode],
  );

  theme = responsiveFontSizes(theme, {factor: 10});

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}