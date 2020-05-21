import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./loginComponents/login";
import Home from "./dashBoardComponents/dashboard"

const Routes = () => {
  return (
    <>
      <Switch>
          <Route path={"/"} component={Login} exact/>

          <Route path={"/home"} component={Home} exact/>
        {/*<Route exact path="/dash" component={Dashboard} />*/}
        {/*<Route*/}
        {/*  render={props => (*/}
        {/*    <ErrorClassifyRender ErrorStatus={404} />*/}
        {/*  )}*/}
        {/*/>*/}
      </Switch>
    </>
  );
};
export default Routes;
