import { CheckCircle, Trash } from "lucide-react";

export default function TodoCard({todo, setList, list}){
    function handleClick(id){
        setList((prev)=> prev.map((t)=> (t.id == id? {...t, completed: !t.completed}: t)));
    }
    return(
        <div className="w-full border py-5 px-5 rounded-md">
            <h1
            className={todo.completed? "text-decore":""}
            className="text-2xl font-bold bg-linear-60 from-violet-800 via-violet-500 to-violet-600 text-transparent bg-clip-text">{todo.todo}</h1>
            <div className="w-full flex justify-between items-center mt-2">
            <p className="text-xl">{todo.date}</p>
            <div className="flex gap-2">
            <button className="hover:cursor-pointer">
                <Trash size={28}/>
            </button>
            <button className="hover:cursor-pointer" onClick={()=> handleClick(todo.id)}>
                <CheckCircle size={28}/>
            </button>
            </div>
            </div>
        </div>
    )
}