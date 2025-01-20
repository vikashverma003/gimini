// context/CounterContext.js
import React, { createContext, useState } from 'react';

// Create a Context
const CounterContext = createContext();

// Create a Context Provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
