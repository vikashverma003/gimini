import React, {useState,useRef, useEffect} from 'react'

function RefHooky() {
    const [value, setValue]  = useState(0);
    const previousCountRef = useRef(0);
    useEffect(()=>{ 
        console.log(previousCountRef.current);
        previousCountRef.current = value;
        console.log(previousCountRef.current);

    },[value]);

    const inputRef = useRef(null);
    const handleFocus = () => {
        // Focus the input field
        inputRef.current.focus();
    };

    /*
    Explanation:
    const prevCountRef = useRef(); creates a mutable ref object that stores the previous value of count.
    prevCountRef.current is used to store the previous count value.
    The useEffect hook updates the prevCountRef.current every time the value/count changes, but since updating a useRef value does not trigger a re-render, it is a good way to track previous states without causing unnecessary renders.
    The previous value of value is displayed on the screen.
    */
    /*
    Key Points:
    useRef is different from useState:
    useState triggers a re-render when the value changes.
    useRef does not trigger a re-render. It persists the value across renders without causing side effects.
    Accessing DOM Elements:

    You can use useRef to hold a reference to a DOM element (like an input or a div) and directly interact with it using methods like focus(), scrollIntoView(), etc.
    Mutable Values:

    You can store values in a useRef object that need to persist but do not require a re-render when updated. This is useful for things like timers, counters, or tracking previous values.
    */

  return (
    <div>
        <h2>Here is the ref content {previousCountRef.current} </h2>
        <h2>Setting the value to {value}</h2>
        <button type="button" onClick={()=>setValue((value)=>value+1)}>+1</button>
       
        {/* 1. Accessing a DOM Element with useRef
            You can use useRef to get a reference to a DOM element and interact with it directly.
            1.1 Accessing DOM elements (like focusing on an input field).
            1.2 Storing mutable values that do not cause re-renders when changed (e.g., keeping track of a previous value).
         
         */}
        <h2>Focus on Input</h2>
        <input ref={inputRef} type="text" placeholder="Click the button to focus" />
        <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default RefHooky