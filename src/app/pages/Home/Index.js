import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './home.css';

function Index(){

    const history = useHistory();
    const id = 1;

    const location = useLocation();
    console.log(location.state.id, location.state.name)

    const goToProduct =()=> {
        history.push({
            pathname: '/product',
            state: {
              id: id,
              name:"Product Page"
            }
        });
    }
  
    return (
        <div className="container">
            <div className="title"><b>Home Page</b><br />Welcome to QRBUZZ Menu</div>
            <button onClick={goToProduct}>Product Page</button>
        </div>
    )
}

export default Index;