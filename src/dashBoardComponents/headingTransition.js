import {animated, useTransition} from "react-spring";
import React from "react";


const HeadingTransition = ({items}) => {

    const transitions = useTransition(items, item => item.key, {
        from: {opacity: 0, transform: "translate3d(0,-40px,0)"},
        enter: {opacity: 1, transform: "translate3d(0,0px,0)"},
        leave: {opacity: 0, transform: "translate3d(0,-40px,0)"},
    });

    return (
        <>

            { transitions.map(({item, props, key}) =>
                                        <animated.div key={key} style={props}> {item.item}</animated.div>)}


        </>


    )
}


export default HeadingTransition;