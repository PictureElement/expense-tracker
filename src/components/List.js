import React, { useContext } from 'react';
import { Context } from '../context/Store';
import Stack from '@mui/material/Stack';
import Item from './Item';

function List() {
  const [state, setState] = useContext(Context);

  console.log(state);

  const items = state.transactions.map(item => (
    <Item item={item} key={item.id} />
  ));

  return (
    <Stack component="ul" aria-labelledby="recent-transactions-heading" spacing={2} sx={{pl:0, m:0}}>
      {items}
    </Stack>
  )
}

export default List
