import * as React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import LogoutIcon from '@mui/icons-material/Logout';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Paper elevation={0} style={{height: "100vh" }}>
      {/* Basic App Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Expense Tracker
            </Typography>
            <IconButton sx={{ mx: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton aria-label="log out">
                <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="sm">

        <Card
          sx={{
            my: 2,
            p: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden'
          }}
        >
          {/* Income */}
          <Box 
            sx={{
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>Income</Box>
            <Box sx={{ color: 'success.main', typography: 'h5' }}>
              $511.00
            </Box>
          </Box>
        
          <Divider orientation="vertical" variant="middle" flexItem />
          
          {/* Expense */}
          <Box 
            sx={{
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>Expense</Box>
            <Box sx={{ color: 'error.main', typography: 'h5' }}>
              $511.00
            </Box>
          </Box>
        </Card>
    
        {/* Transaction history */}
        <Stack component="ul" spacing={2} sx={{pl:0, m:0}}>

          {/* Transaction item */}
          <Card 
            component="li"
            sx={{
              typography: 'body1',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderRight: '4px solid',
              borderColor: 'success.main'
            }}
          >
            <Box>
              Freelancing
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{ 
                  mx: 1
                }}
              >
                $210.00
              </Box>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Card>
          
          {/* Transaction item */}
          <Card
            component="li"
            sx={{
              typography: 'body1',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderRight: '4px solid',
              borderColor: 'success.main'
            }}
          >
            <Box>
              Movie
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{ 
                  mx: 1
                }}
              >
                $50.00
              </Box>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Card>

          {/* Transaction item */}
          <Card
            component="li"
            sx={{
              typography: 'body1',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderRight: '4px solid',
              borderColor: 'error.main'
            }}
          >
            <Box>
              Food
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{ 
                  mx: 1
                }}
              >
                $25.00
              </Box>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Card>
        
        </Stack>

        <Fab color="primary" aria-label="Add transaction">
          <AddIcon />
        </Fab>

      </Container>
    </Paper>
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

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}