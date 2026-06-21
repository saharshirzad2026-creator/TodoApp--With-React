import React, { useActionState } from 'react'
import { getDataFromForm } from '../Actions/User.action'

function UseActionState() {
    useActionState(getDataFromForm,{
        message: '',
        success: false,
    })
  return (
    <div className='w-full min-h-screen justify-center items-center flex'>
      <form className='w-7/12 border p-8 rounded-md flex flex-col gap-4' action="">
        <input name='name' className='border px-2 py-2 w-full rounded-md focus:outline-0' type="text" placeholder='Enter your Name'/>
        <input name='email' className='border px-2 py-2 w-full rounded-md focus:outline-0' type="email" placeholder='Enter your Email address'/>
        <button className='py-2 w-full text-xl font-bold rounded-md bg-linear-60 from-fuchsia-500 via-fuchsia-300 to-fuchsia-800 text-stone-100' type='submit'>Save</button>
      </form>
    </div>
  )
}

export default UseActionState
