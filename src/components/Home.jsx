import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      alert("Please log in first!");
      navigate("/login"); // Redirect if not logged in
    }
  }, []);


    const[todo, setTodo] = useState("")
    const[todos, setTodos] = useState([])
    const[showFinished, setShowFinished] = useState(true)
    const [priority, setPriority] = useState("Low"); // Default: Low


useEffect(()=> {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
    
  },[])
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

const handleAdd = () => {

  setTodos([...todos, {id: uuidv4(), todo, isCompleted: false, priority}])
  setTodo("");
  setPriority("Low");
  saveToLS()
  
}
const handleEdit = (e, id) => { 
  let t = todos.filter(i=> i.id === id)
  setTodo(t[0].todo)
  let newTodos = [...todos.filter(item=>{
    return item.id !== id
  })];
  setTodos(newTodos, todos)
  saveToLS()

}
const toggleFinished = (e) => { 
  setShowFinished(!showFinished)
}

const handleDelete = (e, id) => { 
  let index = todos.findIndex(item=>{
    return item.id == id;
  })
  let newTodos = [...todos.filter(item=>{
    return item.id !== id
  })];
  setTodos(newTodos, todos)
  saveToLS()

}
const handleChange = (e) => {
  setTodo(e.target.value)

}

const handleCheckbox = (e) => {
  let id = e.target.name; 
  let index = todos.findIndex(item=>{
    return item.id == id;
  })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
  saveToLS()
 }

 const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "text-red-600 font-bold"; // High Priority (Red)
    case "Medium":
      return "text-yellow-500 font-semibold"; // Medium Priority (Yellow)
    case "Low":
      return "text-green-600 font-normal"; // Low Priority (Green)
    default:
      return "";
  }
};


 return (
    <>

      <div className="mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] w-1/2 ">
        <h1 className="font-bold text-center text-xl">iTask - Manage your todos at one place</h1>
        <div className="addtodos my-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold my-3">Add a Todo</h2>   
          <div className="flex">
            
          <input onChange={handleChange} value={todo} type="text" className="w-full h-8 rounded-md px-5 py-1"/>
          <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-violet-700 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-full mx-2 disabled:bg-slate-500">Save</button>
            </div>
              </div>
            <div className="flex gap-2">
  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
    className="border rounded-md p-1"
  >
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
  
       
          </div>
          
          <input className="my-4" onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
          
        <h2 className="text-xl font-bold my-3">Your Todos</h2>
          <div className="todos">
            {todos.length == 0 && <div className="m-5">No Todos to display</div> }
            {todos
  .sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority]; // Sort Descending
  }).map((item) => {
  return (showFinished || !item.isCompleted) && (
    <div key={item.id} className="todo flex justify-between my-3 bg-white p-3 rounded-md shadow-md">
      <div className="flex gap-5 items-center">
        <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
        <div className={item.isCompleted ? "line-through text-gray-500" : ""}>{item.todo}</div>
        <span className={`${getPriorityColor(item.priority)} ml-2`}>
          [{item.priority}]
        </span>
      </div>
      <div className="buttons flex">
        <button onClick={(e) => handleEdit(e, item.id)} className="bg-violet-700 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
          Edit
        </button>
        <button onClick={(e) => handleDelete(e, item.id)} className="bg-red-600 hover:bg-red-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
          Delete
        </button>
      </div>
    </div>
  );
})}
          </div>
        </div>


        </>
  );
        
        }
        
        export default Home