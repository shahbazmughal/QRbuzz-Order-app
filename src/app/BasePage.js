import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Index from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Complete from "./pages/Complete/Complete";


export default function BasePage() {

    return (
        <Suspense fallback={<h2>Loading Suspense</h2>}>
            <Switch>
                <Route path="/home" component={Index}/>
                <Route path="/product" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/thanks" component={Complete}/>
                <Route path="/dashboard" component={DashboardPage}/>
                <Redirect from="/" exact={true} to="/home"/>
            </Switch>
        </Suspense>
    );
}
