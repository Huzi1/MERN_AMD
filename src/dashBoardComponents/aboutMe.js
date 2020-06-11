import React from "react";

import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dev from "../images/Dev_image.jpg"
import db from "../images/mongo.jpeg"
import aws from '../images/aws.jpeg'
import rct from '../images/react.png'
import docker from "../images/docker.jpeg"
import node from "../images/node express.jpeg"
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import boot from "../images/bootstrap.jpeg"

const AboutMe = () => {

    return (
        <>

            <Container fluid style={{
                paddingTop: "5%",
                paddingBottom: "8%"
            }}>
                <Row className="justify-content-md-center">
                    <h1 style={{
                        fontFamily: "verdana",
                        color: "rgb(55, 0, 179)"
                    }}>About application</h1>
                </Row>
            </Container>
            <Row className="justify-content-md-center"><h2 style={{
                fontSize: "2em",
                margin: "0.67em 0",
                fontFamily: "verdana",
                color: "rgb(55, 0, 179)"
            }}>Tech stack</h2></Row>
            <Row className="justify-content-md-center" style={{paddingBottom: "5%"}}>
                <Container fluid>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={rct}/>
                            {/*<Card.Header>Header</Card.Header>*/}
                            <Card.Body>

                                <Card.Title>React.js</Card.Title>
                                <Card.Text>
                                    FrontEnd built on React.js using modern approaches like hooks and react-redux for
                                    store management
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={boot}/>
                            {/*<Card.Header>Header</Card.Header>*/}
                            <Card.Body>

                                <Card.Title>React-Bootstrap</Card.Title>
                                <Card.Text>
                                    Popular UI framework bootstrap implemented using react bootstrap wrapper
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={node}/>
                            {/*<Card.Header>Header</Card.Header>*/}
                            <Card.Body>

                                <Card.Title>Node.js</Card.Title>
                                <Card.Text>
                                    Node.js server running Express.js framework
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={db}/>
                            {/*<Card.Header>Header</Card.Header>*/}
                            <Card.Body>

                                <Card.Title>MongoDB</Card.Title>
                                <Card.Text>
                                    Cloud based NoSql database implemented on MongoDB Atlas
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={docker}/>
                            {/*<Card.Header>Header</Card.Header>*/}
                            <Card.Body>
                                <Card.Title>Docker</Card.Title>
                                <Card.Text>
                                    Container technology used to spin up the application stack in least amount of time
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card>
                            <Card.Img variant="top" src={aws}/>
                            {/*<Card.Header>Header</Card.Header>*/}
                            <Card.Body>

                                <Card.Title>EC2</Card.Title>
                                <Card.Text>
                                    AWS EC2 instance used to host the containerized application running react and node
                                </Card.Text>
                            </Card.Body>

                        </Card>

                    </CardGroup>


                </Container>
            </Row>

            <Container fluid style={{paddingBottom: "5%"}}>
                <h2 style={{
                    fontSize: "2em",
                    margin: "0.67em 0",
                    fontFamily: "verdana",
                    color: "rgb(55, 0, 179)"

                }}>About Me</h2>
                <Row className="justify-content-md-center">
                    <Col md={{span: 3, offset: 2}}>
                        <Row className="justify-content-md-center" style={{paddingBottom: "3%"}}>
                            <Image src={dev} roundedCircle style={{height: "200px"}}/>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yaminhuzaifa/"><i
                                style={{color: "#0077b5"}} className="fa fa-linkedin"
                                aria-hidden="true"/></a> </Col>
                            <Col md="auto"> <a target="_blank" rel="noopener noreferrer" href="https://github.com/Huzi1"> <i style={{color: "black"}}
                                                                                   className="fa fa-github"
                                                                                   aria-hidden="true"/></a></Col>
                            <Col md="auto"> <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/13069003/huzaifa-yamin"> <i
                                style={{color: "#f48024"}} className="fa fa-stack-overflow"
                                aria-hidden="true"/> </a></Col>


                        </Row>
                    </Col>

                    <Col md={{span: 3, offset: -2}}>
                            <h2 style={{
                                fontSize: "2em",
                                margin: "0.67em 0",
                                fontFamily: "verdana",
                                color: "rgb(55, 0, 179)"

                            }}>About Me</h2>
                            <p><strong> "

                                I am a full stack software developer based in Melbourne, Australia.
                                I like to explore new languages, frameworks and cloud services.
                                I am a recent graduate from RMIT University in masters of information technology
                                specialized
                                in software engineering "

                            </strong></p>

                        </Col>
                </Row>
            </Container>


        </>

    )

}

export default AboutMe;