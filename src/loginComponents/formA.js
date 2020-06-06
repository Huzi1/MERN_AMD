import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {useSelector, useDispatch} from "react-redux";
import {fetchUser} from "../redux/actions/loginActions";
import Error from "./Error";
import {Redirect} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


const FormA = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState(false)
    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(3, "Must have atleast 3 Characters").max(255, "Must" +
            " be shorter than 255").required("Must enter a name"),
        password: Yup.string().required("Please enter your password")
    });

    const handleSpin = (e) => {
        setState(true);
    }



    const loginData = useSelector(
        state => state.loginReducer.data
    );
    const loginError = useSelector(
        state => state.loginReducer.error
    );

    if (loginData.length !== 0) {

        if (loginData.code === 200) {
            // setState(false)

            localStorage.setItem("user", loginData.doc.username);


            return (<Redirect
                to={{
                    pathname: "/home",
                    state: {
                        fName: loginData.doc.firstName,
                        lName: loginData.doc.lastName

                    }
                }}
            />)
        } else {
            console.log("loginError", loginError);
        }
    }

    return (
        <>
            <Formik initialValues={{userName: "", password: ""}}
                    validationSchema={validationSchema}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);

                        //alert(JSON.stringify(values, null, 2));
                        const obj = {username: values.userName, password: values.password};
                        dispatch(
                            fetchUser(obj)
                        );
                        resetForm();
                        setSubmitting(false)
                    }}>
                {({

                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (


                    //    formik in control of form submit event
                    <form onSubmit={handleSubmit} id="log-form">

                        <div style={{
                            flex: 1,
                            order: 2
                        }}>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder={"Enter your username(Hint:huz1)"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                                className={touched.userName && errors.userName ? "has-error" : null}

                            />
                            <Error touched={touched.userName} message={errors.userName}/>
                        </div>

                        <div style={{
                            flex: 1,
                            order: 3
                        }}>
                            <input
                                type="password"
                                name="password"
                                id="psw"
                                placeholder={"Enter your password(Hint:admin1)"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                style={{
                                    flex: 1,
                                    order: 3
                                }}
                                className={touched.password && errors.password ? "has-error" : null}
                            />
                            <Error touched={touched.password} message={errors.password}/>

                        </div>
                        <br/>
                        <div className="input-row" style={{
                            flex: 1,
                            order: 4
                        }}>
                            {
                                state
                                    ? <span><Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                Loading...
                                </span>
                                    :
                                    <button id="submit" type="submit" onClick={(e) => {
                                                  handleSubmit(e);
                                                  handleSpin(e)
                                              }}
                                            disabled={isSubmitting}>Submit</button>
                            }
                        </div>
                    </form>


                )}

            </Formik>
        </>
    )

}

export default FormA