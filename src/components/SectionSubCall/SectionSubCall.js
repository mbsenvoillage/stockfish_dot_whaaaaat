import React from 'react';
import { StyledSubCall } from "./SubCall.styled";

export default function SectionSubCall(props) {
    return (
        <StyledSubCall>
            <p>{props.subcalltxt}</p>
        </StyledSubCall>
    )
}
