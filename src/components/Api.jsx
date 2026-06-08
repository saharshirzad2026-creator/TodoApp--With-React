import React, { useEffect, useState } from 'react'

function Api() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  useEffect(()=>{
    async function getData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await data.json();
        const filteredList = response.filter((p) => p.title.includes(value));
        setList(filteredList);
    }
    getData();
  },[value]); 
  list.length == 0 && (
    <div>
        {" "}
        <h1>No Posts exists</h1>
    </div>
  );
  return (
    <div className='bg-stone-200 w-full min-h-screen'>
      <div className='w-full max-w-6xl mx-auto flex flex-col p-5 space-y-6'>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search...' className='py-3 border rounded-md focus:outline-0 px-2 w-full' type="text" />
        <div className='space-y-6'>
            {list.map((y) => (
                <div className='w-full p-4 border rounded-2xl' key={y.id}>
                    <h1 className='text-3xl font-bold'>
                        {value
                        ? y.title 
                        .split(new RegExp(`(${value})`, "gi"))
                        .map((part,index) => 
                        part.toLowerCase() === value.toLowerCase() ? (
                            <span key={index} className='text-red-500'>
                                {part}
                            </span>
                        ) : (
                            part
                        ),
                      )
                  : y.title}
                    </h1>
                    <p className='text-xs'>{y.body}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Api