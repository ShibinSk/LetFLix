// Context.js
import React, { createContext, useState } from 'react';

// Create a context
const amountContext = createContext();

// Create a provider component
const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  return (
    <amountContext.Provider value={{ amount, setAmount }}>
      {children}
    </amountContext.Provider>
  );
};

export { amountContext, AmountProvider };
