import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Details(props) {

    const [logindata,setlogindata] = useState([]);
    console.log(logindata);

    const history = useNavigate();

    var todayDate = new Date().toISOString().slice(0, 10);

    //details mate  modeal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const Birthday = ()=>{
       const getuser = localStorage.getItem("user_login")

       if(getuser && getuser.length)
       {
        const user = JSON.parse(getuser);
        // console.log(user);

        setlogindata(user)


        const userbirth = logindata.map((ele,i)=>{
            return ele.date === todayDate 
        });

        if(userbirth){
            setTimeout(()=>{
                console.log("ok");
                handleShow();
            },3000)
        }

       }

    }

    const userlogout =()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(()=>{
        Birthday();

    }, [])
    return (
        <>
            {
                logindata.length === 0 ? "error" : 
                <>
                    <h1>details page</h1>
                    <h1>{logindata[0].name}</h1>
                    <button className='btn btn-primary' onClick={userlogout}>LogOut</button>

                    {
                        logindata[0].date === todayDate ?
                        
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Thank you...
                            </Button>
                        </Modal.Footer>
                    </Modal>:""
                    }

                </>
            }
        </>
    );
}

export default Details;