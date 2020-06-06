import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Col, Container, ListGroup, Tab} from "react-bootstrap";
import React, {useState} from "react";


import {useDispatch} from "react-redux";
import {deleteCat} from "../../redux/actions/dashboardAction";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

const Delete = (props) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState({value: '', isShow: false})
    const title = props.cat

    const handleChange = (event) => {
        let valueSelected = event.target.value
        setItem({
            ...item,
            value: `${valueSelected}`,
            isShow: true
        });

    };
    const handleSubmit = (e) => {

        setItem({
            ...item,
            isShow: true
        });

        let myObj = {category: item.value.toLowerCase(), id: '', amount: ''}
        dispatch(deleteCat(myObj));

        e.preventDefault()
    }
    return (
        <>
            {
                item.isShow
                    ? <Alert variant={"danger"}>
                        Warning! this action can not be recalled!
                        <Button onClick={() => setItem({
                            ...item,
                            isShow: false
                        })} variant="info">
                            I am Smart!
                        </Button>
                    </Alert>
                    : null

            }
            <Container>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formGridState">

                        <Row className="justify-content-md-center">

                            <Col>
                                <Form.Control as="select" value={item.value} onChange={handleChange}>
                                    <option>Choose a category...</option>
                                    {title.map((cat) => <option key={Math.random()}>{cat.toUpperCase()}</option>)}
                                </Form.Control>
                            </Col>
                        </Row>

                    </Form.Group>
                    <Button id="submit" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
};

export default Delete;