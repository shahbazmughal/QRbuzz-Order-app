import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Checkout.css';

function Checkout(){

    const history = useHistory();
    const id = 4;
    const name = "Checkout Page";

    const location = useLocation();
    console.log(id, name)

    const goToHome =()=> {
        history.push({
            pathname: '/thanks',
            state: {
              id: id,
              name:name
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Order Checkout Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToHome}>Go to Order Complete</button>
        </div>
    )
}

export default Checkout;