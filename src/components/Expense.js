import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Context } from '../context/Store';

function Expense() {
  const [state, setState] = useContext(Context);

  const expenseItems = state.transactions.filter(item => item.type === 'expense');

  const expenseAmounts = expenseItems.map(({amount}) => amount);

  const expense = expenseAmounts.reduce(((previousAmount, currentAmount) => previousAmount + currentAmount), 0);

  return (
    <Card
      sx={{
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>EXPENSE</Box>
      <Box sx={{ color: 'error.main', typography: 'h5' }}>− € {expense}</Box>
    </Card>
  )
}

export default Expense
