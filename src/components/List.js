import React, { useContext } from 'react';
import { Context } from '../context/Store';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Item from './Item';
import Empty from './Empty';

function List() {
  const [state, setState] = useContext(Context);
  
  const items = state.transactions.map(item => (
    <Item item={item} key={item.id} />
  ));

  const emptyTemplate = (<Empty />);

  const listTemplate = (
    <div>
      <Typography id="recent-transactions-heading" variant="h6" component="h2" sx={{ my: 2, fontWeight: 'light' }}>Recent transactions</Typography>
      <Stack component="ul" aria-labelledby="recent-transactions-heading" spacing={2} sx={{pl:0, m:0}}>
        {items}
      </Stack>
    </div>
  );

  return (
    state.transactions.length > 0 ? listTemplate : emptyTemplate
  )
}

export default List
