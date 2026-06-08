import React, { useState } from 'react'

function DarkMode() {
    const [mode, setMode] = useState(false);
  return (
    <div className={`h-screen w-full ${mode? 'bg-black': 'bg-white'}`}>
      <button className={`${mode ? "text-white" : "text-black"} hover:cursor-pointer shadow-2xl shadow-gray-600 p-3 rounded-md ml-[600px] my-20 bg-gray-400`} onClick={() => setMode(!mode)}>{mode ? "Light Mode" : "Dark Mode"}</button>
    </div>
  )
}

export default DarkMode