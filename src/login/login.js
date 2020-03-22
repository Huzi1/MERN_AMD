import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import loginImg from './login2.jpg';
import Component from "react";
import Error from "./Error";
import Nav from  "./formNav";
import FormA from "./formA";
// import Dashboard from "../pages/dashboard";
import FormB from "./formB";
import {BrowserRouter as Router, Route,} from 'react-router-dom';

// const validationSchema = Yup.object().shape({
//     userName: Yup.string().min(3, "Must have atleast 3 Characters").max(255, "Must" +
//         " be shorter than 255").required("Must enter a name"),
//     password: Yup.string().required("Please enter your password")
// });


function Login() {
    var [status, setState] = useState(false)


    return (
        <div id="main-box">
            {/*<h1>Helllllo login{status}</h1>*/}
            <div className="left">
                <div style={{

                    top: "20%",
                    // left:"10%",
// right:"10%",
//                     width: "auto",
//                     height: "auto",
//                     margin: "0 auto",
                    position: "relative",
                    display: "flex"
                }}>
                    <img src={loginImg} style={{
                        flex:"1",
                        width: "100%",
                        padding:"5%"
                        // top:"25%"
                        // height: "100%"
                    }}/>
                </div>
            </div>
            <div className="right">
                <div className="centered">
                    <Router>
                    <Nav />
                    <Route path={"/"} component={FormA} exact/>
                    <Route path={"/register"} component={FormB}/>

                    </Router>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Login