import React, { useEffect, useState } from 'react'

function QuestionFive() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(()=>{
        let interval = null;
        if(running){
            interval = setInterval(()=>{
                setSeconds((prev)=>prev+1);
            }, 1000)
        }
        return () => clearInterval(interval);
    },[running])
  return (
    <div>
      <h1 className='py-4 w-96 mx-auto bg-linear-60 from-pink-600 via-pink-400 to-pink-700 text-white rounded-2xl text-3xl text-center'>{seconds}</h1>
      <div className='w-full flex gap-96'>
        <button onClick={()=> setRunning(true)} className='py-2 px-8 mx-5 rounded-md font-bold bg-linear-60 from-pink-600 via-pink-400 to-pink-700 my-5 hover:cursor-pointer text-white'>Start</button>
        <button onClick={()=> setRunning(false)} className='py-2 px-8 font-bold bg-linear-60 from-pink-600 via-pink-400 to-pink-700 rounded-md my-5 hover:cursor-pointer text-white'>Stop</button>
      </div>
    </div>
  )
}

export default QuestionFive