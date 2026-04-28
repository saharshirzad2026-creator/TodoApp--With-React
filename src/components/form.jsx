import { useState } from "react"

export default function CreateForm({list, setList, showForm, setShowForm}){
    const [value, setValue] = useState("");
    function handleClick(){
        if(value.trim().length > 0){
        const todo = {
            id: Date.now(),
            todo: value,
            completed: false,
            date: new Date().toLocaleTimeString()
        }
        setList((prev) => [...prev, todo]);
        setValue("");
        setShowForm(false);
    }
    }
        { 
            if(showForm){
           return(
        <div className="w-full h-screen flex justify-center items-center bg-mauve-200">
            <div className="w-2/5 py-12 px-5 rounded-md bg-white shadow-2xl shadow-black flex flex-col gap-4">
            <h1 className="text-center font-bold bg-linear-60 from-violet-800 via-violet-400 to-violet-800 text-transparent bg-clip-text text-2xl">Create Todo</h1>
            <input value={value} onChange={(e)=> setValue(e.target.value)} className="py-2 px-2 border border-violet-700 rounded-md focus:outline-0" placeholder="What is in your mind?" type="text" />
            <button onClick={handleClick} className="py-2 hover:cursor-pointer text-xl text-white rounded-md bg-linear-60  from-violet-700 via-violet-400 to-violet-900 border-0">Save</button>
            </div>
        </div>
           )}
        }
}