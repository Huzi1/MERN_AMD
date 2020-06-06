import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Add from './billsCatTabComponents/catTabAdd'
import {Tab, Nav} from "react-bootstrap";
import Delete from "./billsCatTabComponents/catTabDelete";

import ModifyBill from "./BillsModifyComponents/modifyBill";
import DeleteBill from "./BillsModifyComponents/billTabDelete";

import TechStack from "../loginComponents/techStackHeader";


const Bills = (props) => {
        const {activeBills, cat} = props;


        return (
            <>

                <div>
                    <Jumbotron fluid>
                        <Container>
                            <Row className="justify-content-md-center">
                                <TechStack/>
                            </Row>

                        </Container>
                    </Jumbotron>

                </div>
                <br/>
                <br/>
                <br/>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Row className="justify-content-md-center">
                                <h1 className="display-4" style={{color: '#3700B3'}}>Modify Categories</h1>
                            </Row>

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
                                            {/*<Tab.Pane eventKey="third">*/}
                                            {/*    Third Pane*/}
                                            {/*</Tab.Pane>*/}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>


                        <Col>
                            <Row className="justify-content-md-center">
                                <h1 className="display-4" style={{color: '#3700B3'}}>Modify Bills</h1>
                            </Row>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Add/Edit</Nav.Link>
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
                                                <DeleteBill active={activeBills} title={cat}/>
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
    }
;

export default Bills;