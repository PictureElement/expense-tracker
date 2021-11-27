import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Context } from '../context/Store';

function Balance() {
  const [state] = useContext(Context);

  const amounts = state.transactions.map(item => {
    // Add sign
    if (item.type === 'expense') {
      return -Math.abs(item.amount);
    } else {
      return item.amount;
    }
  });

  // balance is of Number type
  const balance = amounts.reduce(((previousAmount, currentAmount) => previousAmount + currentAmount), 0);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        mb: 2,
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>BALANCE</Box>
      {/* Convert balance to a positive number using Math.abs() */}
      {/* Use toFixed() to format and convert it to a string for visual representation */}
      <Box sx={{ typography: 'h4', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{balance < 0 ? '−' : '+'} € {Math.abs(balance).toFixed(2)}</Box>
    </Card>
  )
}

export default Balance
