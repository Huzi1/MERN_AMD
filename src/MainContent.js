import React from 'react';
// import ReactDOM from 'react-dom';



function MainContent(props){
    return(
        <div>
            <h2>{props.product.name}</h2>
            <p>${props.product.price.toLocaleString("en-US", {style: "currency", currency: "AUD"})}</p>
            <p>Description: {props.product.description}</p>
        </div>
    )
}

export default MainContent