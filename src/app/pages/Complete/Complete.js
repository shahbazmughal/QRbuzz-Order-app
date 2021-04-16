import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Complete.css';

function Complete(){

    const history = useHistory();
    const id = 5;
    const name = "Complete Page";

    const location = useLocation();
    console.log(id, name)

    const goToHome =()=> {
        history.push({
            pathname: '/home',
            state: {
              id: id,
              name:name
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Order Complete Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    )
}

export default Complete;