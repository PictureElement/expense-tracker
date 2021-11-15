import React, { createContext, useState } from 'react';

// Initial state
const initialState = {
  transactions: [
    { id: 1, type: 'expense', amount: '34', description: 'Camera' },
    { id: 2, type: 'income', amount: '50', description: 'Salary' }
  ]
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