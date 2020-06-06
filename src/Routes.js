import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./loginComponents/login";
import Home from "./dashBoardComponents/dashboard"
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {


    return (
        <>
            <Switch>

                <Route path={"/"} component={Login} exact/>

                <ProtectedRoute exact path='/home' component={Home}/>
                {/*<Route path={"/home"} component={Home} exact/>*/}

            </Switch>
        </>
    );
};
export default Routes;
