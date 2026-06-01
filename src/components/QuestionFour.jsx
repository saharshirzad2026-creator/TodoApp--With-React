import React, { useRef, useState } from 'react'

function QuestionFour() {
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);
    function handleClick(){
        setCounter((prev)=>prev+1);
        const randomNumber = Math.floor(Math.random()*10)
        if(randomNumber > 5){
           ref.current.style.backgroundColor = "blue";
        }
        else{
            ref.current.style.backgroundColor = "red "
        }
    }
  return (
    <div ref={ref} className='h-1/2 w-full'>
      <button onClick={handleClick}>Change bg</button>
      <h1>You have changed the bg {counter} times</h1>
    </div>
  )
}

export default QuestionFour