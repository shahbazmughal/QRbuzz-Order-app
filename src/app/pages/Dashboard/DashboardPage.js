import React from "react";
import {connect,useSelector,useDispatch} from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import './dashboard.css';

function DashboardPage(props) {

  const history = useHistory();
  const id = 1;

  const location = useLocation();

  const goToHome =()=> {
    history.push({
        pathname: '/home',
        state: {
          id: id,
          name:"Home Page"
        }
    });
  }

  return  (
    <div className="container">
      
        <div className="title"><b>{location.state.id} - {location.state.name}</b><br />Welcome to QRBUZZ Menu</div>
        <button onClick={goToHome}>Home Page</button>
    </div>
  );
}

export default (DashboardPage);