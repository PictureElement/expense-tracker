import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Item(props) {
  const { id, type, amount, description } = props;

  return (
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
        borderLeft: '4px solid',
        borderLeftColor: type === 'income' ? 'success.main' : 'error.main'
      }}
    >
      <Box>
        {description}
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
          €{amount}
        </Box>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  )
}

export default Item