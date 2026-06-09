import React, { useMemo, useState } from 'react'
import { useDeferredValue } from 'react';

function ThirdUseMemo() {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const delay = useDeferredValue(value);
    const number = useMemo(()=>{
        return longCalculation(delay);  
    },[delay])
  return (
    <div>
      <input 
      type="text" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className='border rounded-md py-2 px-4 focus:outline-0'
      />
      <input 
      type="number" 
      value={value}
      onChange={(e)=>setValue(Number(e.target.value))}
      className='border border-pink-400 mt-5 py-2 px-4 rounded-md focus:outline-0'
      />
      <h1>{number}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default ThirdUseMemo

function longCalculation(number){
    for(let i = 0; i < 200000000; i++){
        return number**3
    }
}
