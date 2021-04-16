import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Cart.css';

function Cart(){

    const history = useHistory();
    const id = 3;
    const name = "Cart Page"

    const location = useLocation();
    console.log(id, name)

    const goToCheckout =()=> {
        history.push({
            pathname: '/checkout',
            state: {
              id: id,
              name:name
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Order Cart Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToCheckout}>Go to Checkout Page</button>
        </div>
    )
}

export default Cart;