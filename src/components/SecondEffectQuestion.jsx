import React, { useEffect } from 'react'

function SecondEffectQuestion() {
  useEffect(()=>{
    console.log("welcome");
  },[])
  return (
    <div>
      
    </div>
  )
}

export default SecondEffectQuestion
