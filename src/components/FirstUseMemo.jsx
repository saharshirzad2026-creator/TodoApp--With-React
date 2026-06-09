import React, { useMemo, useState } from 'react'

function timeConsuming(text){
    for(let i = 0; i < 20000; i++){}
    return text;
}

function FirstUseMemo() {
    const [value, setValue] = useState("");
    const [isDark, setIsDark] = useState(false);
    // const myText = timeConsuming(value);
    const myText = useMemo(()=>{
        return timeConsuming(value);
    },[value])
  return (
    <div className={`w-full h-fit p-5 ${isDark? 'bg-black text-white': 'bg-white text-black'}`}>
      <input className='border py-2 px-4 focus:outline-0 rounded-md' type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <h1 className='text-3xl text-center font-bold'>{value}</h1>
      <button className='hover:cursor-pointer bg-linear-60 from-pink-600 via-pink-300 to-pink-600 rounded-md p-2 text-white mt-5' onClick={()=>setIsDark(!isDark)}>Toggle Them</button>
    </div>
  )
}

export default FirstUseMemo
