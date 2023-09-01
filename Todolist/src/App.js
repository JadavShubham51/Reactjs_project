import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editid, seteditid] = useState(0);

  // Add karva mate use
  const handleSubmit = (e) => {
    e.preventDefault();

    //edit throu upadte value becuse to same id match or not
    if (editid) {
      const editTodo = todos.find((i) => i.id === editid);

      const updeted = todos.map(
        (t) =>
          t.id === editTodo.id
            ? (t = { id: t.id, todo }) //edit to change value
            : { id: t.id, todo: t.todo } //defult value
      );
      setTodos(updeted);
      seteditid(0)
      setTodo("");
      return;
    }

    //new add karva mate
    if (todo !== "") {
      setTodos([{ id: `${todo}~${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  //delete karva
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  //Edit
  const handleEdit = (id) => {
    const editTodo = todos.find((e) => e.id === id);
    setTodo(editTodo.todo);
    seteditid(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoFrom" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editid ? "Edit" : "Go"}</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singletodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// const arr = [
//   { id:1,name:"a", },
//   {id:2,name:"b",},
// ];
//map
// {arr.map((num)=>(
//     <>
//       {num},
//     </>
//   ))
// }
//filter method
// {
//   arr.filter((num)=>(
//         num!==3
//   ))
// }
// {
//   arr.map((num)=>{
//     return(
//       <div key={num.id}>
//         {num.name}
//       </div>
//     )
//   })
// }

export default App;
