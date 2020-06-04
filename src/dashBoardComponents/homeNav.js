import React from "react";
import {Col, Container, ListGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import PieChart from "../charts/Pie";
import RadarPlot from "../charts/Radar";
import HorizontalPlot from "../charts/Horizontal";
import LinePlot from "../charts/RandomAnimatedLine";

const HomeNav = (props) => {
    // console.log("insideHomeNav", props)
    const {title, billSum, bills} = props
    // console.log(billSum)


    return (
        <>
            <h4> My Bills</h4>

            <Container fluid>
                <Row style={{padding:"2%"}}>
                    <Col sm={{span: 3, offset: 1}}>
                        <div>
                            <Badge variant={"success"}>My Bill Categories </Badge>
                            <ListGroup>
                                {title.map((cat) => <ListGroup.Item
                                    key={Math.random()}>
                                    <Col>
                                        <Badge pill variant="info">{cat.toUpperCase()}</Badge></Col>
                                </ListGroup.Item>)}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col sm={{span: 4, offset: 2}}>
                        <PieChart title={title} bill={`${billSum}`}/>

                    </Col>

                </Row>
                <Row style={{padding:"2%"}}>
                    <Col sm={{span: 4, offset: 1}}>
                        <RadarPlot title={title} bills={bills}/>
                    </Col>

                    <Col sm={{span: 4, offset: 1}}>
                        <HorizontalPlot title={title} bill={`${billSum}`}/>
                    </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center" style={{padding:"2%"}}>
                    <Col sm={4}>
                        <LinePlot title={title} bill={bills}/>
                    </Col>

                </Row>
            </Container>
        </>
    )


}
export default HomeNav;