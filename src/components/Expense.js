import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

function Expense() {
  return (
    <Card
      sx={{
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>EXPENSE</Box>
      <Box sx={{ color: 'error.main', typography: 'h5' }}>$784.40</Box>
    </Card>
  )
}

export default Expense
