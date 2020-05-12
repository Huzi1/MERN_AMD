import React from 'react';
import Error from "./Error";
import {Formik} from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3, "Must have at least 3 Characters").max(255, "Must" +
        " be shorter than 255").required("Must enter a name"),
    password: Yup.string().required("Please enter your password"),
    confPassword: Yup.string().oneOf([Yup.ref('password'), null],'Passwords must match'),
    fName: Yup.string().min(3, "Must be at least 3 characters").max(255, "Must be shorter than 255 characters").required(),
    lName: Yup.string().min(3, "Must be at least 3 characters").max(255, "Must be shorter than 255 characters").required(),
});

const mapStateToProps = state =>{
    return {
        isLoading: state.isLoading
    }
}

function FormB(){


    return(

        <>
            <Formik initialValues={{userName: "", password: "", confPassword:"", fName:"", lName:""}}
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
                                        placeholder={"Enter your password"}
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
                                <div style={{
                                    flex: 1,
                                    order: 4
                                }}>
                                    <input
                                        type="password"
                                        name="confPassword"
                                        id="confPsw"
                                        placeholder={"Re-type your password"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confPassword}
                                        // style={{
                                        //
                                        //     flex: 1,
                                        //     order: 4
                                        // }}
                                        className={touched.confPassword && errors.confPassword ? "has-error" : null}
                                    />
                                    <Error touched={touched.confPassword} message={errors.confPassword}/>

                                </div>
                                <div style={{
                                    flex: 1,
                                    order: 5
                                }}>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder={"Enter your first name"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fName}
                                        className={touched.fName && errors.fName ? "has-error" : null}


                                    />
                                    <Error touched={touched.fName} message={errors.fName}/>
                                </div>
                                  <div style={{
                                    flex: 1,
                                    order: 6
                                }}>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder={"Enter your last name"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lName}
                                        className={touched.lName && errors.lName ? "has-error" : null}


                                    />
                                    <Error touched={touched.lName} message={errors.lName}/>
                                </div>
                                <div className="input-row" style={{
                                    flex: 1,
                                    order: 7
                                }}>
                                    <button id="submit" type="submit" disabled={isSubmitting}>Register</button>
                                </div>
                            </form>


                        )}

                    </Formik>
            </>
    )


}

export default FormB