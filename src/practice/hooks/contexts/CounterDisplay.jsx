import React,{useContext} from 'react'

import {CounterContext} from './CounterContext';

const CounterDisplay = () => {
    const { count } = useContext(CounterContext); // Access the counter state from context
  
    return <p>Current Count: {count}</p>;
  };

export default CounterDisplay