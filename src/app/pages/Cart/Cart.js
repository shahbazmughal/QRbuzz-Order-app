import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Cart.css';

function Index(){

    const history = useHistory();
    const id = 1;

    const location = useLocation();
    console.log(location.state.id, location.state.name)

    const goToCheckout =()=> {
        history.push({
            pathname: '/checkout',
            state: {
              id: id,
              name:"Checkout Page"
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Cart Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToCheckout}>Checkout</button>
        </div>
    )
}

export default Index;