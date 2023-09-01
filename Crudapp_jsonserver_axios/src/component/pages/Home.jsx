import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const [user, setuser] = useState([]);

  useEffect(() => {
    loaduser();
    console.log("my channel");
  }, []);

  //    [] nahi dete infinite jata he 

  const loaduser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setuser(result.data);
  };

//   delte karne ke liye
const deleteuser = async id =>{
    await axios.delete(`http://localhost:3001/users/${id}`,user);
    loaduser();
}

  return (
    <div className="container">
      <h1>Home page</h1>
      <table class="table table-dark  table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User name</th>
            <th scope="col">Emails</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
                user.map((user,index)=>(
                    <tr key={user.name}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-primary m-2 text-white" to={`/user/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
                            <Link className="btn btn-primary m-2 text-white" to={`/user/edit/${user.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                            <Link className="btn btn-danger m-2 text-white" onClick={()=>{deleteuser(user.id)}}>Delete</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}

export default Home;
