import React, {Component} from 'react';

import {BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';

import login from "./loginComponents/login";

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">

                    {/*<NavBar/>*/}


                    <Route path={"/"} component={login} exact/>
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
            </Router>
        );
    }
}

export default App;
