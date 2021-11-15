import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/Store';
import Stack from '@mui/material/Stack';
import Item from './Item';

function List() {
  const [state, setState] = useContext(Context);

  console.log(state);

  const list = state.transactions.map(item => (
    <Item id={item.id} type={item.type} amount={item.amount} description={item.description} key={item.id} />
  ));

  return (
    <Stack component="ul" aria-labelledby="recent-transactions-heading" spacing={2} sx={{pl:0, m:0}}>
      {list}
    </Stack>
  )
}

export default List