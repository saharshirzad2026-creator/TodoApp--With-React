import { useState } from "react";
import CreateForm from "./components/form";
import Navbar from "./components/nav";
import TodoList from "./components/TodoList";
import FirstReducer from "./components/FirstReducer";
import SecondReducer from "./components/SecondReducer";
import ThirdReducer from "./components/ThirdReducer";
import FourthReducer from "./components/FourthReducer";
import FifthReducer from "./components/FifthReducer";

export default function App(){
  const [showForm, setShowForm] = useState(false);
  const [list, setList] = useState([]);
  return (
    <div className="bg-stone-200 w-full min-h-screen">
      {/* <Navbar showForm = {showForm} setShowForm = {setShowForm}/>
            <CreateForm list = {list} setList = {setList} showForm = {showForm} setShowForm = {setShowForm}/>
            <TodoList list = {list} setList = {setList}/> */}
            {/* <FirstReducer/> */}
            {/* <SecondReducer/> */}
            <ThirdReducer/>
            <FourthReducer/>
            {/* <FifthReducer/> */}
    </div>
  )
}