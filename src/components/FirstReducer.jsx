import { Type } from 'lucide-react'
import React, { useReducer } from 'react'

function FirstReducer() {
    function func(state, action){
        if(action.type === "inc"){
            return {count:state.count + action.payload}
        }
        else{
            return {count:state.count - action.payload}
        }
    }
    const [data, action] = useReducer(func, {count: 0})
  return (
    <div className='bg-stone-200 w-full h-screen'>
    <div className='w-1/2 h-96 shadow-2xl shadow-gray-400 bg-white flex flex-col gap-10 mx-auto rounded-md'>
    <h1 className='text-3xl font-bold text-center bg-linear-120 from-emerald-600 via-emerald-400 to-emerald-700 text-transparent bg-clip-text font-serif'>First Task of useReducer</h1>
      <button className='py-3 px-20 mx-25 hover:cursor-pointer rounded-md bg-linear-60 from-emerald-700 via-emerald-400 to-emerald-600 text-white text-xl font-bold font-serif' onClick={()=>action({type: "inc", payload: 1})}>Increment</button>
      <h1 className='text-2xl font-bold rounded-xl text-white px-4 w-40 mx-auto py-3 text-center bg-emerald-600'>{data.count}</h1>
      <button className='py-3 px-5 mx-25 hover:cursor-pointer rounded-md bg-linear-60 from-emerald-700 via-emerald-400 to-emerald-600 text-white text-xl font-bold font-serif' onClick={()=>action({type: "dec", payload: 1})}>Decrement</button>
    </div>
    </div>
  )
}

export default FirstReducer
