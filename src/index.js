/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
 import "react-app-polyfill/ie11";
 import "react-app-polyfill/stable";
 import React from "react";
 import ReactDOM from "react-dom";
 import * as _redux from "./redux";
 import store, { persistor } from "./redux/store";
 import App from "./app/App";
 
 // Datepicker

 const { PUBLIC_URL } = process.env;
 
 ReactDOM.render(
  
           <App store={store} persistor={persistor} basename={PUBLIC_URL} />
       ,
   document.getElementById("root")
 );
 