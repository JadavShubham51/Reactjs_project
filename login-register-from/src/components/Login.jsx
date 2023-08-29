import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";

// https://www.youtube.com/watch?v=fMTSQ6K_Oh0&t=2696s
// npm i boostrap
// npm i react-router-dom@6.0.2 router mate

function Login(props) {

  const history = useNavigate()

    const [inpval,setInpval] =useState({
        email: "",
        password: ""
    })

    // const [data,setdata]=useState([])
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

        const getuserArr = localStorage.getItem("userdata");
        console.log(getuserArr);

        const {  email , password}=inpval;
        if(email === "")
        {
            alert("Email field is Required")
        }
        else if(!email.includes("@"))
        {
            alert("plz corret gamil valid ")
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
            if(getuserArr && getuserArr.length)
            {
              const userdata = JSON.parse(getuserArr); //isko object me convert kiya
              // console.log(userdata);
              const userlogin = userdata.filter((ele,i)=>{
                return ele.email === email && ele.password === password
              });
              if(userlogin.length === 0)
              {
                alert("Invalid detalis");
              }
              else
              {
                //path of login
                console.log("login suucessfull");

                // login thay pachi detalis page ma java mate
                localStorage.setItem("user_login",JSON.stringify(userlogin))
                history("/detalis")
              }
            }
        }
    }






  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Log in</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password"  onChange={getdata} placeholder="Password"
/>
              </Form.Group>

              <Button variant="primary" onClick={addData} style={{ background: "rgba(67,185,127)" }} className="col-lg-6" type="submit" >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an Account <span><NavLink to="/">Sign In</NavLink></span>{" "}
            </p>
          </div>
          <Sign_img/>
        </section>
      </div>
    </>
  );
}

export default Login;
