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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


function App() {
  const handleClick = () => {
    console.log('Handle Click');
  }

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

        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          History
        </Typography>

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

      </Container>

    </div>
  );
}

export default App;
