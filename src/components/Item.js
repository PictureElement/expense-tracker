import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../context/Store';

function Item({ item }) {
  const [state, setState] = useContext(Context);

  const handleDeleteClick = (e) => {
    // Delete transaction
    // Use ... spread syntax to expand state object and override its existing property (i.e. transactions)
    setState({
      ...state,
      transactions: state.transactions.filter(transaction => transaction.id !== item.id )
    });
  };

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
        borderLeftColor: item.type === 'income' ? 'success.main' : 'error.main'
      }}
    >
      <Box>
        {item.description}
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
          {/* Use toFixed() to format and convert amount to a string for visual representation */}
          {item.type === 'income' ? '+' : '−'} € {item.amount.toFixed(2)}
        </Box>
        <IconButton onClick={handleDeleteClick} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  )
}

export default Item
