import React from "react";
import {Route,Redirect} from "react-router-dom";


const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            props => {
                if (localStorage.getItem('user') != null) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {pathname: "/"}}
                    />
                }

            }
        }/>


    )
}

export default ProtectedRoute;