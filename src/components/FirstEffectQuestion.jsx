import React, { useEffect, useState } from 'react'

function FirstEffectQuestion() {
  const [number, setNumber] = useState(0);
  useEffect(()=>{
    document.title = "The number is " + number
  },[number])
  return (
    <div>
      <h1 className='text-center text-3xl font-bold text-fuchsia-800 font-serif'>First question of useEffect</h1>
      <button className='mx-62 rounded-md hover:cursor-pointer mt-5 bg-linear-60 from-fuchsia-700 via-fuchsia-300 to-fuchsia-700 p-3 text-white font-bold text-xl' onClick={()=>setNumber(number + 1)}>Click me</button>
    </div>
  )
}

export default FirstEffectQuestion