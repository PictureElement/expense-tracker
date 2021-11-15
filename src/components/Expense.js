import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Context } from '../context/Store';

function Expense() {
  const [state, setState] = useContext(Context);

  const expenseItems = state.transactions.filter(item => item.type === 'expense');

  const expenseAmounts = expenseItems.map(({amount}) => amount);

  // expense is of Number type
  const expense = expenseAmounts.reduce(((previousAmount, currentAmount) => previousAmount + currentAmount), 0);

  return (
    <Card
      sx={{
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>EXPENSE</Box>
      {/* Use toFixed() to format and convert expense to a string for visual representation */}
      <Box sx={{ color: 'error.main', typography: 'h5' }}>− € {expense.toFixed(2)}</Box>
    </Card>
  )
}

export default Expense
