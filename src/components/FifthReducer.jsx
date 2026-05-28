const studentList = ["Ali Ahmadi", "Sahil Rezaie", "Payman Rahimi", "Raha Tahiri"];
import React, { useReducer } from 'react'
import SecondTodo from './SecondTodo';
import AddTodo from './AddTodo';
import AddStudent from './AddStudent';
import Student from './Student';

function func(data, action){
    return [...data, action.payload]
}
function FifthReducer() {
    const [students, dispatch] = useReducer(func, studentList);
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <AddStudent student={students} dispatch={dispatch}/>
      <div className='p-5 grid grid-cols-2 gap-4'>
        {students.map((t,index)=> {
            return(
                <Student key={index} t={t}/>
            )
        })}
      </div>
    </div>
  )
}

export default FifthReducer
