import React, { useState, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Context } from '../context/Store';

function Modal(props) {

  const { open, onClose } = props;

  const [state, setState] = useContext(Context);

  // For theme toggler
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // State
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  // Callbacks
  const handleClose = () => {
    onClose();
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleAmountChange = (e) => {
    // String to Number type
    setAmount(Number(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add transaction
    // Use ... spread syntax to create a new array using state array as part of it
    setState({
      ...state,
      transactions: [{ id: state.transactions.length + 1, type, amount, description }, ...state.transactions]
    });

    // Close modal
    onClose();

    // Reset component state
    setType('expense');
    setAmount(0);
    setDescription('');
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>New transaction</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              row
              aria-label="transaction type"
              name="type"
              value={type}
              onChange={handleTypeChange}
            >
              <FormControlLabel value="expense" control={<Radio />} label="Expense" />
              <FormControlLabel value="income" control={<Radio />} label="Income" />
            </RadioGroup>
          </FormControl>

          <TextField
            id="amount"
            required
            sx={{ my: 2 }}
            value={amount}
            onChange={handleAmountChange}
            InputProps={{ min: "0", step: "0.01", startAdornment: <InputAdornment position="start">€</InputAdornment> }} 
            fullWidth
            label="Amount"
            type="number"
          />

          <TextField
            id="description"
            required
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            label="Description"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

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


