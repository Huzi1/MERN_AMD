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
                        <h1>Add you bills here</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Container>
                </Jumbotron>

            </div>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <Col>

                        <h1 className="display-4" style={{color: '#3700B3'}}>Modify Categories</h1>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" >ADD</Nav.Link>
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
                                            First Pane

                                            <Add bills={activeBills}/>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            Second Pane
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

                    <Col>
                        Add/Delete Bills
                    </Col>
                </Row>


            </Container>


        </>


)
};

export default Bills;