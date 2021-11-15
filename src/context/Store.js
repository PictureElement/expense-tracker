import React, { createContext, useState } from 'react';

// Initial state
const initialState = {
  transactions: []
}

// Create context object
export const GlobalContext = createContext(initialState);

// Component to wrap our application and provide the state

const Store = ({ children }) => {
  const [state, setState] = useState(intialState);

  return (
    // Every Context object comes with a Provider React component
    <GlobalContext.Provider value={[state, setState]}>{children}</GlobalContext.Provider>
  )
}

export default Store;