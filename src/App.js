import React, {Component} from 'react';

// import Amplify, { API } from 'aws-amplify';
// import awsconfig from './aws-exports';
import './App.css';
import store from './redux/configureStore'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './index.css';
import './jumbotron.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";
import {Provider} from "react-redux";


const App= () => {

        return (

                      <Provider store={store}>

                <div className="App">
                    <Routes />

                </div>
                      </Provider>

        );

};

export default App;
