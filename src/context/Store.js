import React, { createContext, useState } from 'react';

// Initial state
const initialState = {
  transactions: [
    { id: 4, type: 'expense', amount: 550.50, description: 'Camera' },
    { id: 3, type: 'income', amount: 1800, description: 'Salary' },
    { id: 2, type: 'expense', amount: 7, description: 'Cinema ticket' },
    { id: 1, type: 'income', amount: 1000000, description: 'Winning the Lottery' }
  ],
  error: false
}

// Create context object
export const Context = createContext();

// Component to wrap our application and provide the state
const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    // Every Context object comes with a Provider React component
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

export default Store;