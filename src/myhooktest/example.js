import React, { useState, useEffect } from 'react';

function CounterHook(){
    const [ count, setCount ] = useState(5);

    useEffect(()=>{
        document.title=`You clicked ${count} times`;
    });
    return(
        <div>
            <p>You have clicked the button {count} times</p>
            <button onClick={()=>setCount(count + 1)}>Clicke Me</button>
        </div>
    )
}

export default CounterHook;