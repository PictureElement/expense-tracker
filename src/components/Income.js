import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

function Income() {
  return (
    <Card
      sx={{
        p: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ color: 'text.secondary', typography: 'overline' }}>INCOME</Box>
      <Box sx={{ color: 'success.main', typography: 'h5' }}>$511.00</Box>
    </Card>
  )
}

export default Income
