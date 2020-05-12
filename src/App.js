import React, {Component} from 'react';

// import Amplify, { API } from 'aws-amplify';
// import awsconfig from './aws-exports';
import './App.css';
import store from './redux/configureStore'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";
import {Provider} from "react-redux";

// Amplify.configure(awsconfig);
const App= () => {

        return (

                      <Provider store={store}>

                <div className="App">
                    <Routes/>
                    {/*<NavBar/>*/}


                    {/*<Route path={"/register"} component={formB}/>*/}
                    {/*<Route path={"/profile"} component={Profile}/>*/}


                    {/*<header className="App-header">*/}
                    {/*  <img src={logo} className="App-logo" alt="logo" />*/}
                    {/*  <p>*/}
                    {/*    Edit <code>src/App.js</code> and save to reload.*/}
                    {/*  </p>*/}
                    {/*  <a*/}
                    {/*    className="App-link"*/}
                    {/*    href="https://reactjs.org"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*  >*/}
                    {/*    Learn React*/}
                    {/*  </a>*/}
                    {/*</header>*/}
                </div>
                      </Provider>

        );

};

export default App;
