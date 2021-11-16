import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Empty() {
  return (
    <Alert sx={{ mt: 2 }} variant="filled" severity="info">
      <AlertTitle>No transactions yet</AlertTitle>
      Add your transactions and keep an accurate record of your money inflow and outflow.
    </Alert>
  )
}

export default Empty
