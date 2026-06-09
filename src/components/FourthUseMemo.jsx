import React, { useMemo, useState, useTransition } from 'react'

function FourthUseMemo() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [loading, startTransation] = useTransition();

    useMemo(()=>{
        const listSize = 20000;
        const l = [];
        startTransation(()=>{
            for(let num = 0; num < listSize; num++){
            l.push(text);
        }
        })
        setList(l);
    },[text])
  return (
    <div className='w-full h-screen mx-auto'>
      <input 
      className='border rounded-md py-2 px-4 focus:outline-0 border-pink-700 mt-5 ml-96'
      type="text" 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <div className='text-center'>
        {loading ? <div>please wait a minute</div>: list.map((x,index)=>(
            <div key={index}>
                <h1>{x}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FourthUseMemo
