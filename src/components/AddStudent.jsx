import React, { useState } from 'react'

function AddStudent({dispatch}) {
    const [value, setValue] = useState("");
    function handleClick(){
        dispatch({payload: value, type: "add"});
        setValue("");
    }
  return (
      <div className='w-full flex gap-2 mt-20 justify-center'>
        {/* <h1 className='text-center text-2xl font-bold font-serif text-indigo-500'>Fourth Task of useReducer</h1> */}
    <input
    value={value}
    onChange={(e)=> setValue(e.target.value)}
    type="text" placeholder='Enter a Student' className='w-1/2 px-2 py-3 rounded-md border border-green-600 focus:outline-0'/>
    <button className='bg-linear-60 from-green-600 via-green-400 to-green-600 px-8 py-2 text-white font-bold rounded-md' onClick={handleClick}>Save</button>
    </div>
  )
}

export default AddStudent
