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
    <div className='w-1/2 h-72 border bg-white flex flex-col gap-10 mx-auto mt-40 rounded-md'>
      <h1 className='text-2xl font-bold'>{data.count}</h1>
      <button className='py-3 px-20 mx-6 rounded-md bg-linear-60 from-emerald-700 via-emerald-300 to-emerald-600 text-white text-xl font-bold font-serif' onClick={()=>action({type: "inc", payload: 1})}>Increment</button>
      <button className='py-3 px-20 mx-6 rounded-md bg-linear-60 from-emerald-700 via-emerald-300 to-emerald-600 text-white text-xl font-bold font-serif' onClick={()=>action({type: "dec", payload: 1})}>Decrement</button>
    </div>
  )
}

export default FirstReducer
