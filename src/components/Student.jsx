import React from 'react'

function Student({t}) {
  return (
    <div className='p-6 rounded-md bg-white shadow-2xl shadow-stone-300'>
      <h1 className='text-3xl font-bold bg-linear-60 from-indigo-600 via-indigo-400 to-indigo-600 text-transparent bg-clip-text'>
        {t}
      </h1>
    </div>
  )
}

export default Student
