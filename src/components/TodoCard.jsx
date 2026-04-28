import { CheckCircle, Trash } from "lucide-react";

export default function TodoCard({todo, setList, list}){
    function handleClick(id){
        setList((prev)=> prev.map((t)=> (t.id == id? {...t, completed: !t.completed}: t)));
    }
    return(
        <div className="relative">
        <div className="w-full border py-5 px-5 rounded-md">
            <h1
            id="heading"
            className={todo.completed? "text-decore":""}
            >{todo.todo}</h1>
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
        <div className="w-full py-5 px-5 items-center flex justify-between fixed bottom-0 left-0 bg-linear-60  from-violet-700 via-violet-400 to-violet-900 text-white">
            <h1 className="text-3xl font-bold">Total</h1>
            <p>{list.length}</p>
        </div>
        </div>
    )
}