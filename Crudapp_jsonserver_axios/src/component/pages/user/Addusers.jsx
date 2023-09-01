import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';

function Addusers(props) {

    // let history = useHistory();

    const [user,setuser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    })

    const {name,username,email,phone,website} = user;

    const onInputChange=(e)=>{
        console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit= async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user)
        // history.push("/");
    }

    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4 bg-success'>Add A user</h2>
                <form  onSubmit={ e => onSubmit(e)}>
                    <div  className='from-group  m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter your Name'
                            name='name'
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter your Username'
                            name='username'
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter Your E-mail Address'
                            name='email'
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter Your Phone Number'
                            name='phone'
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter Your Website Name'
                            name='website'
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className='btn btn-primary btn-block m-3'>Add User</button>
                </form>
            </div> 
        </div>
    );
}

export default Addusers;