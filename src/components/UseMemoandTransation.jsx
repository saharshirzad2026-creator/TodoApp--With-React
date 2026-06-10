import React, { useDeferredValue, useEffect, useState, useTransition } from 'react'

function UseMemoandTransation() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [loading, startTransation] = useTransition();
    useEffect(()=>{
        const l = [];
        startTransation(()=>{
            for(let i = 0; i < 20000; i++){
            l.push(value);
        }
        setList(l);
        })
    },[value])
  return (
    <div>
      <input 
      type="text" 
      value={value} 
      onChange={(e)=> setValue(e.target.value)}
      className='border rounded-md border-pink-600 py-2 px-4 mt-5 ml-5 focus:outline-0'
      />
      <div>
        {loading ? <div>please wait a minute</div>: list.map((t)=>{
            return (
                <div>
                    <h1>{t}</h1>
                </div>
            );
        })}
      </div>
    </div>
  )
}

export default UseMemoandTransation
