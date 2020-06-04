import React, {useContext}from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import Login from "./loginComponents/login";
import Home from "./dashBoardComponents/dashboard"
import {useTransition, animated} from "react-spring";

const Routes = () => {
    // const {location} = useContext(__RouterContext);
    // const transitions = useTransition(location, location=> location.pathname,{
    //     from: {opacity:0, transform:"translate(100%,0)"},
    //     enter: {opacity:1, transform:"translate(0%,0)"},
    //     leave: {opacity:0, transform:"translate(-50%,0)"}
    // })
  return (
    <>
      <Switch>

          <Route path={"/"} component={Login} exact/>

          <Route path={"/home"} component={Home} exact/>

      </Switch>
    </>
  );
};
export default Routes;
