import React from 'react';
import { useNavigate } from 'react-router-dom';


function Error(props) {

    const history = useNavigate();
    return (
        <>
            <h4>404 Erro ! page not found</h4>
            <button className='btn btn-primary' onClick={()=>{history("/")}}>Redirect login page</button>
        </>
    );
}

export default Error;