import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Context } from '../context/Store';

function Income() {
  const [state, setState] = useContext(Context);

  const incomeItems = state.transactions.filter(item => item.type === 'income');

  const incomeAmounts = incomeItems.map(({amount}) => amount);

  // income is of Number type
  const income = incomeAmounts.reduce(((previousAmount, currentAmount) => previousAmount + currentAmount), 0);

  return (
    <Card
      sx={{
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>INCOME</Box>
      {/* Use toFixed() to format and convert income to a string for visual representation */}
      <Box sx={{ color: 'success.main', typography: 'h6', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>+ € {income.toFixed(2)}</Box>
    </Card>
  )
}

export default Income
