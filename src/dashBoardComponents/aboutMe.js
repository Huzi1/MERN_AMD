import React from "react";

import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dev from "../images/Dev_image.jpg"
import db from "../images/mongo.jpeg"
import aws from '../images/aws.jpeg'
import rct from '../images/react.jpeg'
import docker from "../images/docker.jpeg"
import node from "../images/node express.jpeg"
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

const AboutMe = () => {

    return (
        <>

            <Container fluid style={{
                paddingTop: "5%",
                paddingBottom: "10%"
            }}>
                <Row className="justify-content-md-center">
                    <h1>About application</h1>
                </Row>
            </Container>

            <Row style={{paddingBottom: "5%"}}>
                <Container>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={rct}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={node}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={db}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={docker}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={aws}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>


                </Container>
            </Row>

            <Container fluid style={{paddingBottom: "5%"}}>
                <h2 style={{
                    fontSize: "2em",
                    margin: "0.67em 0"
                }}>About Me</h2>
                <Row className="justify-content-md-center">
                    <Col md={{span: 3, offset: 2}}>
                        <Row className="justify-content-md-center" style={{paddingBottom: "3%"}}>
                            <Image src={dev} roundedCircle style={{height: "200px"}}/>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto"> <i style={{color: "#0077b5"}} className="fa fa-linkedin"
                                     aria-hidden="true"/></Col>
                            <Col md="auto"> <i style={{color: "black"}} className="fa fa-github" aria-hidden="true"/></Col>
                            <Col md="auto"> <i style={{color: "#f48024"}} className="fa fa-stack-overflow"
                                     aria-hidden="true"/></Col>


                        </Row>
                    </Col>

                    {/*<Card style={{width: '18rem'}}>*/}
                    {/*    <Card.Img variant="top" src={dev}/>*/}
                    {/*    <Card.Body>*/}
                    {/*        <Card.Title>Card Title</Card.Title>*/}
                    {/*        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                    {/*        <Card.Text>*/}
                    {/*            Some quick example text to build on the card title and make up the bulk of*/}
                    {/*            the card's content.*/}
                    {/*        </Card.Text>*/}
                    {/*        <Card.Link href="#"><i style={{color: "#0077b5"}} className="fa fa-linkedin" aria-hidden="true"/></Card.Link>*/}
                    {/*        <Card.Link href="#"><i style={{color: "black"}} className="fa fa-github" aria-hidden="true"/> </Card.Link>*/}
                    {/*        <Card.Link href="#"><i style={{color: "#f48024"}}className="fa fa-stack-overflow" aria-hidden="true"/> </Card.Link>*/}
                    {/*    </Card.Body>*/}
                    {/*</Card>*/}
                    <Col>
                        j
                    </Col>
                </Row>
            </Container>


        </>

    )

}

export default AboutMe;