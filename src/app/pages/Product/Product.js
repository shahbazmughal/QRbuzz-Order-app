import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './product.css';

function Index(){

    const history = useHistory();
    const id = 1;

    const location = useLocation();
    console.log(location.state.id, location.state.name)

    const goToCart =()=> {
        history.push({
            pathname: '/cart',
            state: {
              id: id,
              name:"Cart Page"
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Product Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToCart}>Cart Page</button>
        </div>
    )
}

export default Index;