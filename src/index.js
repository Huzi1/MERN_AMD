import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
// import * as serviceWorker from './serviceWorker';




function MyApp() {


    return (

        <div style={{
            height:"100%",
        }} >

            <App />
        </div>
    )
}

export default MyApp

ReactDOM.render(<MyApp />,
    document.getElementById('root'))