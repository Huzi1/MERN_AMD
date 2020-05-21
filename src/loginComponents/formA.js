import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {useSelector, useDispatch} from "react-redux";
import {fetchUser} from "../redux/actions/loginActions";
import Error from "./Error";
import {Redirect} from "react-router-dom";


const FormA = () => {

    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(3, "Must have atleast 3 Characters").max(255, "Must" +
            " be shorter than 255").required("Must enter a name"),
        password: Yup.string().required("Please enter your password")
    });
    const loading = useSelector(state => state.loginReducer.isLoading);
    const loginData = useSelector(
        state => state.loginReducer.data
    );
    const loginError = useSelector(
        state => state.loginReducer.error
    );

    if (loginData.length != 0 ) {

        if(loginData.code === 200) {
            console.log("loginData", loginData);
            localStorage.setItem("user", loginData.doc.username);
            const bills = loginData.doc.data;

            return (<Redirect
                to={{
                    pathname: "/home",
                    state: {
                        fName: loginData.doc.firstName,
                        lName: loginData.doc.lastName
                        // bills: bills
                    }
                }}
            />)
        }
        else{
            console.log("loginError", loginError);
        }
    }
    // } else if (loginError) {
    //     console.log("loginError", loginError);
    // }

//     const mapStateToProps = state =>{
//     return {
//         isLoading: state.isLoading
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return{
//         fetchUser: ()=> dispatch(fetchUser())
//     }
// }
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