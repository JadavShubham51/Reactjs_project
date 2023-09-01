import React, { useEffect, useState } from "react";
import List from "./component/List";
import Alert from "./component/Alert";
import "./App.css";

// npm i react-icons

//loacl stoger mate
const getloaclStorage = () =>{
  let list = localStorage.getItem("list");
  if(list){
    return (list => JSON.parse(localStorage.getItem("list")))
  }
  else {
    return [];
  }
}

function App() {
  const [name, setname] = useState("");
  const [list, setList] = useState(getloaclStorage()); // loacl na batavu hoy to thi use[]
  const [isEditing, setIdEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setalert] = useState({ show: false, msg: "", type: "" });

//local stoger dekhava 
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));

  },[list])

  const handlesubmit =(e) =>{
    e.preventDefault();
    if(!name){
      showAlert(true,"danger","Please Enter value");
    }
    else if(name && isEditing) {
      setList(
        list.map((item)=>{
          if(item.id === editID)
          {
            return {...item, title: name};
          }
          return item;
        })
      );
      setname("");
      setEditID(null)
      setIdEditing(false)
      showAlert(true, "success", "value change");
    }
    else{
      showAlert(true,"success","Item Added to the list");
      const newItem = {id : new Date().getTime().toString(), title: name };
      setList([...list,newItem]);
      setname("");
    }
  };
  const showAlert=(show = false, type="", msg = "") =>{
    setalert({ show, type, msg });
  };
  const removeItem=(id) =>{
    showAlert(true,"danger" ,"Item remove")
    setList(list.filter((item)=> item.id !== id));
  };
  const editItem=(id) =>{
    const editItem = list.find((item)=> item.id === id);
    setIdEditing(true);
    setEditID(id);
    setname(editItem.title);
  };
  const clearList=() =>{
    showAlert(true,"danger","Empty list")
    setList("");
  };

  return (
    <section className="section-center">
      <form onSubmit={handlesubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Todo List Using Local Storage
        </h3>
        <div className="mb-3 form">
          <input
            type="text"
            className="form-control"
            placeholder="e.g Bread"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
          <button type="submit" className="btn btn-success">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{marginTop:"2rem"}}>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <div className="text-center">
            <button className="btn btn-warning" onClick={clearList}>
              Clear Items
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
