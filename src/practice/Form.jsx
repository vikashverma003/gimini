import React, {useState} from 'react';

function Form() {

    const [inputValue, setInputValue] = useState('');
    const [inputEmail, setEmailValue] = useState('');


    const handleChange = (e)=>{
        setInputValue(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        alert(`You submitted: ${inputValue}`);
      };

    return (<div> 

        <h2>Handle form submission</h2>

        <form onSubmit={handleSubmit}> 
        <input type="text" value={inputValue} onChange={handleChange} placeholder = "Try something"  />
        <button type="submit">Submit</button>
        <h3>here is the typed value::  {inputValue} </h3>
        
        </form>

    </div>);
}

export default Form;