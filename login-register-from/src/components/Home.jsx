import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

function Home(props) {


    const [inpval,setInpval] =useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data,setdata]=useState([])
    console.log(inpval);


    const getdata=(e)=>{
        // console.log(e.target.value);

        // const value = e.target.value;

        // isko object destructing
        const { value, name} = e.target;
        console.log(value,name);
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
        
    }

    const addData = (e)=>{
        e.preventDefault();
        console.log((inpval));

        const { name , email , date , password}=inpval;
        var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


        if(name === "")
        {
            alert("Name field is Required")
        }
        else if(email === "")
        {
            alert("Email field is Required")
        }
        else if(reg.test(email) == false)
        {
            alert("plz corret gamil valid ")
            return false;
        }
        else if(date === "")
        {
            alert("date field is Required")
        }
        else if(password === "")
        {
            alert("password field is Required")
        }
        else if(password.length < 5)
        {
            alert("password length graether five")
        }
        else{
            console.log("data is succefull");
            // local ma store karva mate
            localStorage.setItem("userdata",JSON.stringify([...data,inpval]));
            
        }
    }

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control name="date" onChange={getdata} type="date" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" onClick={addData} style={{background:"rgba(67,185,127)"}} className="col-lg-6" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already have an Account <span ><NavLink to="/login">Login In</NavLink> </span> </p>
          </div>
          <Sign_img/>
        </section>
      </div>
    </>
  );
}

export default Home;
