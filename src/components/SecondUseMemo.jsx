import React, { useMemo, useState } from 'react'
import { useDeferredValue } from 'react';

function SecondUseMemo() {
    const [text, setText] = useState("");
    const myText = useDeferredValue(text);
    const myList = useMemo(()=>{
        const list = [];
        for(let i = 0; i < 20000; i++){
            list.push(<div key={i}>{myText}</div>);
        }
        return list;
    },[text])
  return (
    <div>
      <input type="text" 
      value={text} 
      onChange={(e)=> setText(e.target.value)} 
      className='border mt-5 mx-[520px] py-2 px-4 rounded-md focus:outline-0'/>
      <div className='text-center'>
        {myList}
      </div>
    </div>
  )
}

export default SecondUseMemo
