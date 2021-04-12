import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";


export default function BasePage() {

    return (
        <Suspense fallback={<h2>Loading Suspense</h2>}>
            <Switch>
                <Route path="/dashboard" component={DashboardPage}/>
                <Redirect from="/" exact={true} to="/dashboard"/>
            </Switch>
        </Suspense>
    );
}
