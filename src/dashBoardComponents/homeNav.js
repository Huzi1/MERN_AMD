import React from "react";
import {Col, Container, ListGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import PieChart from "../charts/Pie";

const HomeNav = (props) => {
    console.log("insideHomeNav", props)
    // props = JSON.parse(props)
    const title = props.cat;
    const billSum = props.billSm;
    console.log(billSum)
    return (
        <>
            <h4> My Bills</h4>

            <Container>
                <Row>
                    <Col>
                        <div>
                            <Badge variant={"success"}>My Bill Categories </Badge>
                            <ListGroup variant={'flush'} as="ul">
                                {title.map((cat) => <ListGroup.Item action variant={"primary"} as="li"
                                                                    key={Math.random()}>{cat.toUpperCase()}</ListGroup.Item>)}
                            </ListGroup>
                        </div>
                    </Col>
                    {/* <Col>*/}

                    {/*</Col>*/}

                    <Col>
                        <PieChart title={title} bill={`${billSum}`}/>

                    </Col>

                </Row>
                <Row>
                    <Col>
                        <PieChart title={title} bill={`${billSum}`}/>
                    </Col>

                    <Col>
                        <PieChart title={title} bill={`${billSum}`}/>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default HomeNav;