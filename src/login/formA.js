import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import loginImg from './login2.jpg';
import Component from "react";
import Error from "./Error";


const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3, "Must have atleast 3 Characters").max(255, "Must" +
        " be shorter than 255").required("Must enter a name"),
    password: Yup.string().required("Please enter your password")
});


function FormA() {
    return (
        <>
        <Formik initialValues={{userName: "", password: ""}}
                            validationSchema={validationSchema}

                            onSubmit={(values, {setSubmitting, resetForm}) => {
                                setSubmitting(true);
                                alert(JSON.stringify(values, null, 2));
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

                                {/*<div style={{*/}
                                {/*    flex: 1,*/}
                                {/*    order: 1*/}
                                {/*}}>*/}
                                {/*    <label style={*/}
                                {/*        {*/}
                                {/*            color: "#6200EE",*/}
                                {/*            fontWeight: "bold",*/}
                                {/*            fontSize: "2em",*/}
                                {/*            // flexGrow: "<2>"*/}


                                {/*        }*/}
                                {/*    }> Login </label>*/}
                                {/*</div>*/}
                                {/*<label htmlFor="userName">UserName: </label>*/}
                                <div style={{
                                    flex: 1,
                                    order: 2
                                }}>
                                    <input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        placeholder={"Enter your username"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userName}
                                        className={touched.userName && errors.userName ? "has-error" : null}
                                        // style={{
                                        //     padding: "12px 20px",
                                        //
                                        // }}

                                    />
                                    <Error touched={touched.userName} message={errors.userName}/>
                                </div>


                                {/*<label htmlFor="password">Password: </label>*/}
                                <div style={{
                                    flex: 1,
                                    order: 3
                                }}>
                                    <input
                                        type="password"
                                        name="password"
                                        id="psw"
                                        placeholder={"Enter your password"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        style={{
                                            // padding: "12px 20px",
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
                                    <button id="submit" type="submit" disabled={isSubmitting}>Submit</button>
                                </div>
                            </form>


                        )}

                    </Formik>
        </>
    )

}

export default FormA