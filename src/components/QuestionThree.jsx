import { useRef, useState } from "react";

export default function QuestionThree(){
    const [todo, setTodo] = useState(["Studying","buying bread"]);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    function handleClick(){
        setTodo((prev)=>[...prev,inputValue]);
        setInputValue("");
        inputRef.current.focus();
    }
    return (
        <>
          <input ref={inputRef} onChange={(e)=> setInputValue(e.target.value)} value={inputValue} className="border" type="text" placeholder="What do you want to do?"/>
          <button onClick={handleClick}>Save</button>
          <div>
            {todo.map((t,index)=> (
                <div key={index}>
                    <h1>{t}</h1>
                </div>
            ))}
          </div>
        </>
    )
}