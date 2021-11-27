import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Context } from '../context/Store';

function Income() {
  const [state] = useContext(Context);

  const incomeItems = state.transactions.filter(item => item.type === 'income');

  const incomeAmounts = incomeItems.map(({amount}) => amount);

  const income = incomeAmounts.reduce(((previousAmount, currentAmount) => previousAmount + currentAmount), 0);

  return (
    <Card
      sx={{
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>INCOME</Box>
      <Box sx={{ color: 'success.main', typography: 'h6', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>+ € {income}</Box>
    </Card>
  )
}

export default Income
