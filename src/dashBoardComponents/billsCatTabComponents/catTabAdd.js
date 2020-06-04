import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import React, {useState} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {postUserData} from "../../redux/actions/dashboardAction";
import {useDispatch} from "react-redux";


const Add = (props) => {
    const {bills} = props

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        title: Yup.string().strict(true).min(3, "Must have at least 3 Characters").lowercase("must be in lowercase").max(255, "Must" +
            " be shorter than 255").notOneOf(bills, "Category already exist").required("Must enter a Title").matches(/^[A-Za-z]+$/, "no integers and special characters allowed")


    });
    //delete this on final
    if (bills != undefined) {
        console.log("Inside cat tab", bills);
        // setIsRunning(false);
        //setCount(100)
    }

    return (
        <>
            <Formik validationSchema={validationSchema}

                    initialValues={{
                        title: ''
                    }}

                    onSubmit={(values, {setSubmitting, resetForm}) => {


                        setSubmitting(true);
                        // setIsRunning(true);
                        setCount(50);
                        // alert(JSON.stringify(values, null, 2));
                        const obj = {category: values.title.toLowerCase(), id: null, amount: null};
                        dispatch(postUserData(obj));


                        resetForm();
                        setSubmitting(false);

                    }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,

                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control controlid="validationFormik01"
                                          size="lg"
                                          type="text"
                                          placeholder="Enter category title"
                                          name="title"
                                          value={values.title}
                                          onChange={handleChange}
                                          isValid={touched.title}
                                          isInvalid={!!errors.title}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button id="submit" variant="primary" type="submit">
                            Submit
                        </Button>

                        <div>
                            <br/>
                            <ProgressBar variant="success" now={count} label={`${count}%`}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default Add;