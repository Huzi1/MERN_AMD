import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import Add from './billsCatTabComponents/catTabAdd'
import {useSelector} from "react-redux";
// import TabContainer from "react-bootstrap";

// import Tabs from 'react-bootstrap/Tabs'
import {Tab, Nav, TabContainer, TabContent, TabPane} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Delete from "./billsCatTabComponents/catTabDelete";
import util from '../utils/util.js'
import ModifyBill from "./BillsModifyComponents/modifyBill";

const Bills = (props) => {

    const {activeBills, cat} = props;
    console.log(activeBills)
    // const activeBills =  useSelector(state => state.dashboardReducer.bills);
    const bills = activeBills && util.ArrayToSet(activeBills)
    console.log("Bill CHild", bills);
// const mapStateToProps = state =>{
//         return{
//             data: state.data,
//             bills: state.bills
//         }
//     }

    return (


        <>
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1 style={{
                            color: "#FFFFFF"
                        }}>Add you bills here</h1>
                        <p style={{
                            color: "#B2EBF2"
                        }}>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Container>
                </Jumbotron>

            </div>
            <br/>
            <br/>
            <br/>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col >
                        <Row className="justify-content-md-center" >
                        <h1 className="display-4" style={{color: '#3700B3'}}>Modify Categories</h1>
                            </Row>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">ADD</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Delete</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Edit</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">


                                            <Add bills={cat}/>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Delete cat={cat}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            Third Pane
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>

                    {/*<Col sm>sm=true</Col>*/}
                    <Col>
                        <Row className="justify-content-md-center">
                        <h1 className="display-4" style={{color: '#3700B3'}}>Modify Bills</h1>
                            </Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">ADD/Edit</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Delete</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">


                                            <ModifyBill cat={cat}/>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </Col>
                </Row>


            </Container>


        </>


    )
};

export default Bills;