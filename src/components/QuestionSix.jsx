import React, { useState } from 'react'

function QuestionSix() {
    const [info, setInfo] = useState({name: "", email: ""});
  return (
    <div>
      <input value={info.name} onChange={(e)=>setInfo({...info, name: e.target.value})} className='border py-2' type="text" placeholder='Enter your Name'/>
      <input value={info.email} onChange={(e)=>setInfo({...info, email: e.target.value})} className='border py-2' type="email" placeholder='Enter your Email'/>
      <h1>Your name is {info.name} and your email address is {info.email}</h1>
    </div>
  )
}

export default QuestionSix