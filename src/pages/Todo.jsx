export default function AllTodo(){
    return (
        <div>
            <Navbar showForm = {showForm} setShowForm = {setShowForm}/>
            <CreateForm list = {list} setList = {setList} showForm = {showForm} setShowForm = {setShowForm}/>
            <TodoList list = {list} setList = {setList}/>
        </div>
    )
}