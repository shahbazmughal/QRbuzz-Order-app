import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Checkout.css';

function Index(){

    const history = useHistory();
    const id = 1;

    const location = useLocation();
    console.log(location.state.id, location.state.name)

    const goToHome =()=> {
        history.push({
            pathname: '/home',
            state: {
              id: id,
              name:"Home Page"
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Checkout Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}

export default Index;