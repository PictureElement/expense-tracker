import React, { useState, useRef, useEffect, useContext } from 'react';
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
import validate from '../utils/validate';

function Modal(props) {

  const { open, onClose } = props;

  // Used to prevent useEffect from running on first render
  const isMounted = useRef(false);

  const [state, setState] = useContext(Context);

  // For theme toggler
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // State
  const [inputErrors, setInputErrors] = useState({});
  const [inputValues, setInputValues] = useState({
    type: 'expense',
    amount: '',
    description: ''
  });

  // Callbacks
  const handleClose = () => {
    onClose();
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target);
    // Overwrite value for "name" property
    setInputValues({...inputValues, [name]: value});
  };

  useEffect(() => {
    if (isMounted.current) {
      // If there are no errors, add transaction
      if (Object.keys(inputErrors).length === 0) {
        // Use ... spread syntax to create a new array using state array as part of it
        setState({
          ...state,
          transactions: [{ id: state.transactions.length + 1, type: inputValues.type, amount: Number(inputValues.amount), description: inputValues.description }, ...state.transactions]
        });

        // Close modal
        onClose();

        // Reset component state
        setInputValues({
          type: 'expense',
          amount: '',
          description: ''
        });
      }
    } else {
      isMounted.current = true;
    }
  }, [inputErrors]); // This is executed when 'setInputErrors' state changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and set input errors.
    setInputErrors(validate(inputValues));
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
              value={inputValues.type}
              onChange={handleChange}
            >
              <FormControlLabel value="expense" control={<Radio />} label="Expense" />
              <FormControlLabel value="income" control={<Radio />} label="Income" />
            </RadioGroup>
          </FormControl>

          <TextField
            error={ inputErrors.amount ? true : null }
            sx={{ my: 2 }}
            name="amount"
            value={ inputValues.amount }
            onChange={ handleChange }
            helperText={ inputErrors.amount }
            fullWidth
            id="amount"
            label="Amount"
            InputProps={{ 
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
              inputMode: 'decimal'
            }}
          />

          <TextField
            error={ inputErrors.description ? true : null }
            name="description"
            id="description"
            value={ inputValues.description }
            onChange={ handleChange }
            helperText={ inputErrors.description }
            fullWidth
            label="Description"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Cancel</Button>
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