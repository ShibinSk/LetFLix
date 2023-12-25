// Context.js
import React, { createContext, useState } from 'react';

// Create a context
const amountContext = createContext();

// Create a provider component
const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [evType, setEvType] = useState("");
  const [tName, setTname] = useState("");
  const [theme, setTheme] = useState("");
  // const ThemeContext = createContext({
  //   theme: '',
  //   setTheme: (theme: string) => {},
  // });

  return (
    <amountContext.Provider value={{ amount, setAmount,evType,setEvType,tName, setTname}}>
      {children}
    </amountContext.Provider>
  );
};

export { amountContext, AmountProvider };
