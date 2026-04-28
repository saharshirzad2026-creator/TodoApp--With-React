import TodoCard from "./TodoCard";

export default function TodoList({list, setList}){
    return (
        <div className="w-full max-w-6xl flex flex-col gap-2.5 my-28 border border-violet-600 shadow-2xl shadow-gray-500 rounded-md mx-auto mb-2">
            {list.map(l=>(
                <TodoCard todo = {l} setList = {setList} list = {list}/>
            ))}
        </div>
    )
}