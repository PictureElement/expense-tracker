import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function Modal(props) {

  const { open, onClose } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    onClose();
  };

  const [transactionType, setTransactionType] = React.useState('Expense');

  const handleChange = (event) => {
    setTransactionType(event.target.value);
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle>New transaction</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup row defaultValue="expense" aria-label="transaction type" name="row-radio-buttons-group">
            <FormControlLabel value="expense" control={<Radio />} label="Expense" />
            <FormControlLabel value="income" control={<Radio />} label="Income" />
          </RadioGroup>
        </FormControl>  
        <FormControl sx={{my: 2}} fullWidth>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <OutlinedInput
            id="amount"
            value=''
            onChange=''
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            label="Amount"
          />
        </FormControl>
    
        <TextField
          id="description"
          fullWidth
          label="Description"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      />
      <Fab onClick={handleOpen} sx={{ position: 'fixed', bottom: '16px', left: '50%', transform: 'translateX(-50%)'}} color="secondary" aria-label="New transaction">
        <AddIcon />
      </Fab>
    </div>
  );
}


