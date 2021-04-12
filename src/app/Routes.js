/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

 import React from "react";
 import { Redirect, Switch, Route } from "react-router-dom";
 import { shallowEqual, useSelector } from "react-redux";
 import BasePage from "./BasePage";
 import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
 
 export function Routes() {
    
 
     return (
         <Switch>
            <Route>
                <BasePage/>
            </Route>
         </Switch>
     );
 }
 