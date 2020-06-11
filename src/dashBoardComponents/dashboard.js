import React, {useEffect, useState} from 'react';
import Bills from "./billsNav";
import HomeNav from "./homeNav"
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import util from '../utils/util';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData, logOut} from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";
import {Redirect} from "react-router-dom";

import AboutMe from "./aboutMe";


const DashBoard = (props) => {


    const dispatch = useDispatch();
    let bills, categories, titleSumAmount;
    const [item, setitem] = useState({eventKey: "home"});

    useEffect(() => {
            const obj = localStorage.getItem('user');
            const myUser = {username: obj};

            myUser && dispatch(
                fetchUserData(myUser)
            );
        }, [item, dispatch]
    );
    // const loading = useSelector(state => state.dashboardReducer.isLoading);
    const userData = useSelector(
        state => state.dashboardReducer.data
    );

    if (userData.length !== 0) {


        if (userData.code === 200) {

            bills = userData.doc.data

            categories = util.ArrayToSet(bills);


            titleSumAmount = util.BillBykey(categories, bills);


        }
    }
    const handleToggle = ()=>{
        if (document.getElementById("mySidebar").className.includes('collapsed')){

            document.getElementById("myContent").style.marginLeft = "240px"
        }
        else
            document.getElementById("myContent").style.marginLeft = "64px"
    }
    return (
        <>

            <div id={"myContent"} className="scroll" style={{

                padding: '15px 20px 0px',
                overflow: 'auto',
                marginLeft: "64px"

            }}>
                {
                    item.eventKey !== "home" &&  item.eventKey !== "about"
                        ? <div className="theme__status" style={{background: "#0097A7"}}> .</div>
                        : null

                }

                {(() => {
                    switch (item.eventKey) {
                        case "home":

                            if (userData.length !== 0) {

                                return <HomeNav title={categories} billSum={titleSumAmount} bills={bills}/>;
                            } else
                                return <Spinner animation="grow"/>


                        case "charts":
                            if (userData.length !== 0) {
                                return <Bills activeBills={bills} cat={categories}/>;
                            } else
                                return <Spinner animation="grow"/>
                        case "about":
                            return <AboutMe />

                        case "log-out":
                            localStorage.removeItem('user');
                            if (localStorage.getItem('user') == null) {
                                dispatch(logOut());
                                return (<Redirect
                                    to={{
                                        pathname: "/",
                                    }}
                                />)
                            }
                            break;

                        default:
                            return <Spinner animation="grow"/>

                    }
                })()}

            </div>

            <SideNav onToggle={handleToggle} id={"mySidebar"}
                     onSelect={(selected) => {
                         // Add your code here
                         if (selected === "charts") {

                             setitem({eventKey: "charts"})
                         } else if (selected === 'log-out') {
                             setitem({eventKey: "log-out"})
                         } else if (selected === "about") {

                             setitem({eventKey: "about"})
                         } else {

                             setitem({eventKey: "home"})
                         }

                     }}>
                {/*expanded---262ja*/}
                <SideNav.Toggle id={"toggle"}/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>

                            <i className="fa fa-fw fa-list-alt" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Bills
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="log-out">
                        <NavIcon>
                            <i className="fa fa-sign-out" aria-hidden="true" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Log-out
                        </NavText>

                    </NavItem>
                    <NavItem eventKey="about">
                        <NavIcon>
                            <i className="fa fa-info-circle" aria-hidden="true" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            about
                        </NavText>

                    </NavItem>


                </SideNav.Nav>


            </SideNav>


        </>


    )


};


export default DashBoard;