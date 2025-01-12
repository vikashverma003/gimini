import React,{useState,useEffect} from 'react'

function SecondHook() {

    const [counter,setCounter] = useState(0);
    const [name,setName] = useState('john');
    
    const increaseCounter = () => {
        setCounter((counter)=> counter + 1);
    }

    useEffect(()=> {
        setTimeout(()=>{
            increaseCounter();
        },2000);
    },[counter]);

    // UseEffect hook runs on the first render or when counter value changes ..
    // Manages side effects (e.g., fetching data, subscriptions).


  return (
    <div>
        <h1>here is the counter information {counter}</h1>
    </div>
  )
}

export default SecondHook