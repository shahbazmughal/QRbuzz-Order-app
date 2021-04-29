import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Index from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Complete from "./pages/Complete/Complete";
import Faqs from './pages/others/Faqs';
import Contact from './pages/others/Contact';
import Terms from './pages/others/Terms';
import Privacy from './pages/others/Privacy';


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
                <Route path="/faq" component={Faqs}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/privacy" component={Privacy}/>
                <Redirect from="/" exact={true} to="/home"/>
            </Switch>
        </Suspense>
    );
}
