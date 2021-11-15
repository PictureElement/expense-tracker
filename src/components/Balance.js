import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Context } from '../context/Store';

function Balance() {
  const [state, setState] = useContext(Context);

  const amounts = state.transactions.map(item => {
    if (item.type === 'expense') {
      // Positive to negative
      return -Math.abs(item.amount);
    } else {
      return item.amount;
    }
  });

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
      <Box sx={{ typography: 'h4' }}>{balance < 0 ? '−' : '+'} € {Math.abs(balance)}</Box>
    </Card>
  )
}

export default Balance
