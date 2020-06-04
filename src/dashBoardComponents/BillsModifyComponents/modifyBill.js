import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Formik} from "formik";
import * as Yup from "yup";
import {postBill} from "../../redux/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dates from "./DatePicker";
import moment from "moment";
import {useDispatch} from "react-redux";

const ModifyBill = (props) => {
    const dispatch = useDispatch();
    const nowDate = moment(new Date()).format("MMMYYYY");
    const [item, setItem] = useState({cat: "", id:nowDate.toLowerCase()})
    const validationSchema = Yup.object().shape({
        amount:Yup.number().moreThan(-1,  "Must be 0 or positive number").required(),
        cat:Yup.string().required()
    });
    const title = props.cat
    const handleChangeDate = (date)=>{
         let dateSelected =  moment(date).format("MMMYYYY");

         setItem({
             ...item,
             id: dateSelected.toLowerCase()
         })
        console.log(dateSelected)
    }


    return (

        <>
            <Formik validationSchema={validationSchema}

                    initialValues={{
                        amount:'',
                        cat: ""
                    }}

                    onSubmit={(values, {setSubmitting, resetForm}) => {


                        setSubmitting(true);

                         // alert(JSON.stringify(values, null, 2));
                        const obj = {category:values.cat.toLowerCase(), id:item.id, amount:values.amount};
                         dispatch(postBill(obj));


                        resetForm();
                        setSubmitting(false);

                    }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      isSubmitting,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,

                  }) => (
                    <Container>

                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group>
                                <Row>
                                    <Form.Control as="select"
                                                  value={values.cat}
                                                  name="cat"
                                                  id="cat"
                                                  onChange={handleChange}>
                                        <option>Choose a bill category...</option>
                                        {title.map((cat) => <option key={Math.random()}>{cat.toUpperCase()}</option>)}
                                        {/*<option>...</option>*/}
                                    </Form.Control>
                                </Row>

                                <br/>
                                {/*<br/>*/}
                                <Row className="justify-content-md-center">
                                    <Col md={"auto"}>
                                        <Form.Label>Date:</Form.Label>
                                    </Col>
                                    <Col md={"auto"}>
                                        <Dates onDateChange={handleChangeDate}/>
                                    </Col>


                                    <Col md={"auto"}>
                                        <Form.Label>Amount :</Form.Label>
                                    </Col>
                                    <Col md={"auto"}>
                                        <Form.Control controlid="ModifyAddFomrik"
                                                      size="sm"
                                                      type="number"
                                                      placeholder="Enter amount"
                                                      name="amount"
                                                      value={values.amount}
                                                      onChange={handleChange}
                                                      isValid={touched.amount}
                                                      isInvalid={!!errors.amount}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.amount}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>


                            </Form.Group>

                            <Button variant="primary"  id="submit" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>


                        </Form>
                    </Container>
                )}
            </Formik>
        </>
    )

};

export default ModifyBill;
