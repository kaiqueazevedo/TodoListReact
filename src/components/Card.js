import React from 'react';

function Card(props){
    return <div ClassName ={props.className?`${props.className} card`: "card"}>
        {props.children}
        </div>
}

export default Card;