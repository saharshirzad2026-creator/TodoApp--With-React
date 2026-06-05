import React, { useEffect, useState } from 'react'

function ThirdEffectQuestion() {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(10);
    const [myChoice, setMyCoice] = useState(0);
    useEffect(()=>{
        let interval = null;
        if(seconds <= 0){
            const alarm = new Audio("/alarm/song.mp4");
            alarm.play();
            clearInterval(interval);
            return 0;
        }
        if(running){
        interval = setInterval(()=>{
            setSeconds((prev)=> prev - 1);
        },1000);
    }
        return ()=> clearInterval(interval)
    },[running,seconds]);
    function func(){
        setSeconds(myChoice);
    }
  return (
    <div>
        <div className="w-[640px] h-52 my-20 bg-white rounded-md gap-3 mx-auto py-3 shadow-2xl shadow-gray-600">
            <h1 className='text-center text-3xl font-bold text-fuchsia-800 font-serif'>Second question of useEffect</h1>
            <div className='flex w-full gap-2.5'>
            <input value={myChoice} onChange={(e)=>setMyCoice(Number(e.target.value))} type="number" className='border focus:border-fuchsia-800 focus:border-2 ml-3 py-2 my-1 w-full rounded-md focus:outline-0'/>
            <button onClick={func} className='py-2 hover:cursor-pointer px-6 font-bold mr-2 rounded-md text-white bg-fuchsia-500'>SetTime</button>
            </div>
      <h1 className='text-center mt-3 text-3xl font-bold font-mono'>{seconds}</h1>
      <div className='flex w-full justify-between'>
        <button onClick={()=> setRunning(true)} className='py-3 px-8 text-white font-bold text-xl bg-linear-60 from-fuchsia-700 via-fuchsia-300 to-fuchsia-700 hover:cursor-pointer mx-3 rounded-md'>Start</button>
        <button onClick={()=> setRunning(false)} className='py-3 px-8 text-white font-bold text-xl bg-linear-60 from-fuchsia-700 via-fuchsia-300 to-fuchsia-700 mx-3 hover:cursor-pointer rounded-md'>Stop</button>
      </div>
      </div>
    </div>
  )
}

export default ThirdEffectQuestion