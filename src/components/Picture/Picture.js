import React from "react";

export default function Picture(props) {
    return (
        <img src={props.path} alt={props.altText}/>
    )
}
