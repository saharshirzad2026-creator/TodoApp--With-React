import React, { useReducer } from 'react'
const information = {name: "", email: ""};

function ThirdReducer() {
    function reducer(data, func){
        switch(func.type){
            case "name":
                return {...data, name: func.payload};
                break;
            default:
                return {...data, email: func.payload};
        }
    }
    const [data, action] = useReducer(reducer, information)
  return (
    <div className='w-1/2 h-62 bg-white mx-auto rounded-md shadow-2xl shadow-gray-400'>
      <h1 className='text-center text-2xl my-3 font-bold text-blue-500'>Third Task of useReducer</h1>
      <div className='w-full flex gap-3 justify-center my-5'>
      <input
      className='border py-2 px-3 rounded-md focus:outline-0 border-blue-400'
      value={data.name}
      onChange={(e)=> action({type: "name", payload: e.target.value})}
      type="text" placeholder='Enter your Name'/>
      <input
      className='border py-2 px-3 rounded-md focus: outline-0 border-blue-400'
      value={data.email}
      onChange={(e)=> action({type: "email", payload: e.target.value})}
      type="text" placeholder='Enter your Email'/>
      </div>
      <h1 className='text-center text-2xl font-serif text-indigo-500'>Your Name is :{data.name}</h1>
      <h1 className='text-center text-2xl font-serif text-indigo-500'>Your Email is :{data.email}</h1>
    </div>
  )
}

export default ThirdReducer
