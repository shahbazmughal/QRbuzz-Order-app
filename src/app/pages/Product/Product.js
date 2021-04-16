import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './product.css';

function Product(){

    const history = useHistory();
    const id = 2;
    const name="Product Page"

    const location = useLocation();
    console.log(id, name)

    const goToCart =()=> {
        history.push({
            pathname: '/cart',
            state: {
              id: id,
              name:name
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Product Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToCart}>Go to Cart Page</button>
        </div>
    )
}

export default Product;