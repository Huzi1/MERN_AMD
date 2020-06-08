import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import store from './redux/configureStore'

import App from './App';

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";





function MyApp() {


    return (
        <BrowserRouter >
        <Provider store={store}>
            <div style={{
                height: "100%",
            }}>

                <App />
            </div>
        </Provider>
            </BrowserRouter>
    )
}

export default MyApp

ReactDOM.render(<MyApp/>,
    document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import store from "./Redux/store";
// import App from "./App";
//
//
// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//         <App/>
//         </Provider>
//     </BrowserRouter>,
//     document.getElementById("root")
// );