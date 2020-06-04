import React from 'react';
import loginImg from './login2.jpg';
import FormA from "./formA";
import FormB from "./formB";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import TechStack from "./techStackHeader";


function Login() {


    return (
        <>
            {/*<Row className="justify-content-md-center">   <TechStack/>  </Row>*/}

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
                    }}/>
                </div>
            </div>
            <div className="right">
                <div className="centered">
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab eventKey="login" title="Login" >
                            <FormA/>
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <FormB/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
            </>
    )
}

export default Login