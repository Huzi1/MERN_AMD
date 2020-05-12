import React from 'react';

import loginImg from './login2.jpg';

import Nav from "./formNav";
import FormA from "./formA";
// import Dashboard from "../pages/dashboard";
import FormB from "./formB";
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// const validationSchema = Yup.object().shape({
//     userName: Yup.string().min(3, "Must have atleast 3 Characters").max(255, "Must" +
//         " be shorter than 255").required("Must enter a name"),
//     password: Yup.string().required("Please enter your password")
// });


function Login() {
    // var [status, setState] = useState(false)


    return (
        <div id="main-box">

            <div className="left">
                <div style={{

                    top: "20%",
                    position: "relative",
                    display: "flex"
                }}>
                    <img src={loginImg} style={{
                        flex: "1",
                        width: "100%",
                        padding: "5%"
                        // top:"25%"
                        // height: "100%"
                    }}/>
                </div>
            </div>
            <div className="right">
                <div className="centered">
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab eventKey="login" title="Login">
                            <FormA />
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <FormB />
                        </Tab>
                    </Tabs>
                    {/*<Router>*/}
                    {/*<Nav />*/}
                    {/*<Route path={"/"} component={FormA} exact/>*/}
                    {/*<Route path={"/register"} component={FormB}/>*/}

                    {/*</Router>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Login