import { Siren } from 'lucide-react'
import React, { useReducer } from 'react'

function SecondReducer() {
    function func(state, action){
        return state = action.payload;
    }
    const [data, action] = useReducer(func, false);
  return (
    <div className='w-full min-h-screen flex'>
      <div className='w-fit p-8 flex flex-col gap-5 items-center justify-center mx-auto'>
        <h1 className='text-3xl font-bold text-green-600'>Second Task of useReducer</h1>
        <Siren size={52} className={`${data ? 'fill-yellow-500 text-yellow-500': ''}`}/>
        <button onClick={()=> action({type: "light", payload: !data})} className={`p-2 px-8 text-white rounded-md hover:cursor-pointer font-bold ${data? 'bg-red-500 text-white': 'bg-black text-white'}`}>
            {data ? "Turn Off": "Turn On"}
        </button>
      </div>
    </div>
  )
}

export default SecondReducer
