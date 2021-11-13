import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

function App() {
  return (
    <div>
      {/* Basic App Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Expense Tracker
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="sm">

        <Box 
          sx={{
            my: 2,
            p: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1
          }}
        >
          
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
        </Box>
        
        {/* Transaction history */}
        <Stack component="ul" spacing={2} sx={{pl:0, m:0}}>

          {/* Transaction item */}
          <Box 
            component="li"
            sx={{
              typography: 'body1',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderRadius: '12px',
              borderRight: '4px solid',
              borderColor: 'success.main',
              boxShadow: 1
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
          </Box>
          
          {/* Transaction item */}
          <Box
            component="li"
            sx={{
              typography: 'body1',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderRadius: '12px',
              borderRight: '4px solid',
              borderColor: 'success.main',
              boxShadow: 1
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
          </Box>

          {/* Transaction item */}
          <Box
            component="li"
            sx={{
              typography: 'body1',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderRadius: '12px',
              borderRight: '4px solid',
              borderColor: 'error.main',
              boxShadow: 1
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
          </Box>
        
        </Stack>

        <Fab color="primary" aria-label="Add transaction">
          <AddIcon />
        </Fab>

      </Container>

    </div>
  );
}

export default App;
