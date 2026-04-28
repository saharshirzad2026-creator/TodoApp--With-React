import { CheckCircle, Trash } from "lucide-react";

export default function TodoCard({todo, setList}){
    function handleClick(id){
        const doneTodo = todo.find((p)=> p.id == id).completed = true;
        setList((prev)=>[...prev, doneTodo]);
    }
    return(
        <div className="w-full border py-5 px-5 rounded-md">
            <h1 className="text-2xl font-bold">{todo.todo}</h1>
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