export default function Navbar({showForm, setShowForm}){
    return (
        <nav className="w-full fixed top-0 left-0 py-6 px-3 flex justify-between bg-linear-60  from-violet-700 via-violet-400 to-violet-900 text-white">
            <h1 className="text-3xl font-bold">Todo App</h1>
            <button onClick={()=> setShowForm(!showForm)} className="py-3 hover:cursor-pointer px-3.5 bg-violet-600 rounded-md">
                {showForm? "Hide Form": "Show Form"}
            </button>
        </nav>
    )
}