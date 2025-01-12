import React, {useState,useEffect} from 'react'

function FirstHook() {
    // Manages state in a functional component.

    const [color, setColor] = useState('Red');
    
    const [counter, setCounter] = useState(0);
    
    const [car, setCar] = useState({
        name:'hyndai',
        model: 'ford',
        year: '2025',
    });


    const changeColor = () => {
        setColor('green');
    };
    const increaseCounter = () => {
        setCounter((counter)=>counter + 1);
    }

    const changeYear = () => {
        setCar((prev)=>{ 
            return {...prev, year:'2024'}
        })
    }

    return (
    <div>
    <h4>here is the color name {color}</h4>
    <button type="button" onClick={changeColor}>Click me</button>
    <h5>Here is the counter data {counter}</h5>
    <button type="button" onClick ={increaseCounter}> Increment Counter</button>

    <h3>here is my car information name is {car.name} and model is {car.model} and the year is {car.year}</h3>

        <button type="button" onClick = {changeYear}>click me to change year</button>
    </div>
  )
}

export default FirstHook