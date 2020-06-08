import React from "react";
import {Col, Container, ListGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import PieChart from "../charts/Pie";
import RadarPlot from "../charts/Radar";
import HorizontalPlot from "../charts/Horizontal";
import LinePlot from "../charts/RandomAnimatedLine";

const HomeNav = (props) => {

    const {title, billSum, bills} = props



    return (
        <>
            <h1 style={{
                fontFamily: "verdana",
                    color: "rgb(55, 0, 179)"
            }}> My Bills</h1>

            <Container fluid>
                <Row style={{padding: "2%"}}>
                    <Col sm={{span: 3, offset: 1}}>
                        <div>
                            <Badge variant={"success"}>{title.length} Bill Categories </Badge>
                            <div>
                                <ListGroup style={{overflowY: "scroll", height:"300px"}}>
                                    {title.map((cat) => <ListGroup.Item variant="light"
                                        key={Math.random()}>

                                        {cat.toUpperCase()}
                                    </ListGroup.Item>)}
                                </ListGroup>
                            </div>
                        </div>
                    </Col>

                    <Col sm={{span: 4, offset: 2}}>
                        <PieChart title={title} bill={`${billSum}`}/>

                    </Col>

                </Row>
                <Row style={{padding: "2%"}}>
                    <Col sm={{span: 4, offset: 1}}>
                        <RadarPlot title={title} bills={bills}/>
                    </Col>

                    <Col sm={{span: 4, offset: 1}}>
                        <HorizontalPlot title={title} bill={`${billSum}`}/>
                    </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center" style={{padding: "2%"}}>
                    <Col sm={4}>
                        <LinePlot  bill={bills}/>
                    </Col>

                </Row>
            </Container>
        </>
    )


}
export default HomeNav;