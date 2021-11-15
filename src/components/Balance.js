import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

function Balance() {
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
      <Box sx={{ color: 'primary.main', typography: 'h4' }}>$1411.50</Box>
    </Card>
  )
}

export default Balance
