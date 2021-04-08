import React from 'react';
import {StyledMePageContainer} from "./MePageContainer.styled";

export default function MePageContainer(props) {
    return (
        <StyledMePageContainer>
            {props.children}
        </StyledMePageContainer>
    )
}
