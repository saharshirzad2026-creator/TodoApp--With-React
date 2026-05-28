const todoList = ["Doing the Laundry", "Studying Book", "Learning Laravel", "Reading a Magazine"];
import React, { useReducer } from 'react'
import SecondTodo from './SecondTodo';
import AddTodo from './AddTodo';

function func(data, action){
    return [...data, action.payload]
}
function FourthReducer() {
    const [todos, dispatch] = useReducer(func, todoList);
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <AddTodo todos={todos} dispatch={dispatch}/>
      <div className='p-5 grid grid-cols-2 gap-4'>
        {todos.map((t,index)=> {
            return(
                <SecondTodo key={index} t={t}/>
            )
        })}
      </div>
    </div>
  )
}

export default FourthReducer
