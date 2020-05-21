import React, {useEffect, useState} from 'react';
import Bills from "./billsNav";
import HomeNav from "./homeNav"
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import util from "../utils/util"
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, fetchUserData} from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";


const DashBoard = (props) => {
    const {fName, lName} = props.location.state;
    let count = 0;

    const [item, setitem] = useState({eventKey: "home"});
    // const [data, setData] = useState({bills:null, cat:null, titleSumAmount:null })
    const dispatch = useDispatch();
    let bills, categories, titleSumAmount;
    useEffect(() => {
            const obj = localStorage.getItem('user');
            const myUser = {username: obj};
            // console.log(myUser);
            myUser && dispatch(
                fetchUserData(myUser)
            );
        }, [item]
    );
    const loading = useSelector(state => state.dashboardReducer.isLoading);
    const userData = useSelector(
        state => state.dashboardReducer.data
    );
    const userError = useSelector(
        state => state.dashboardReducer.error
    );

    if (userData.length !== 0) {

        // console.log("hello", userData)
        if (userData.code === 200) {

            bills = userData.doc.data
            console.log("parent bill", bills)
            categories = util.ArrayToSet(bills);

            // console.log("cat here", categories);
            titleSumAmount = util.BillBykey(categories, bills);


        }
    }

    return (
        <>

            <h1> Hello {fName} {lName} {item.eventKey} </h1>

            <div>
                {(() => {
                    switch (item.eventKey) {
                        case "home":
                            // return <h2>HOME</h2>
                            console.log("in switch")
                            if (userData.length !== 0) {

                                return <HomeNav cat={categories} billSm={titleSumAmount}/>;
                            } else
                                return <Spinner animation="grow"/>

                        case "charts":
                            if (userData.length !== 0) {

                                return <Bills activeBills={bills} cat={categories}/>;

                            }

                        default:
                            return <h2>null bro </h2>
                    }
                })()}

            </div>


            {/*<div>*/}
            {/*    <h4> My Bills</h4>*/}

            {/*    <ListGroup as="ul">*/}
            {/*        {bills.map((bill) => <ListGroup.Item as="li"*/}
            {/*                                             key={Math.random()}>-{bill.category}</ListGroup.Item>)}*/}
            {/*    </ListGroup>*/}
            {/*</div>*/}
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                    if (selected === "charts") {
                        // console.log(selected)
                        setitem({eventKey: "charts"})
                    } else {
                        // console.log(selected)
                        setitem({eventKey: "home"})
                    }

                }}>
                <SideNav.Toggle/>
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
                            {/*fa fa-fw fa-line-chart*/}
                            {/*<i className="fas fa-file-invoice-dollar"></i>*/}
                            <i className="fa fa-fw fa-list-alt" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Bills
                        </NavText>
                        {/*<NavItem eventKey="charts/linechart">*/}
                        {/*    <NavText>*/}
                        {/*        Line Chart*/}
                        {/*    </NavText>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem eventKey="charts/barchart">*/}
                        {/*    <NavText>*/}
                        {/*        Bar Chart*/}
                        {/*    </NavText>*/}
                        {/*</NavItem>*/}
                    </NavItem>
                </SideNav.Nav>


            </SideNav>


        </>


    )


};


export default DashBoard;