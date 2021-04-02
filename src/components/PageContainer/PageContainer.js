import React from 'react';
import {StyledPageContainer} from "./PageContainer.styled";

export default function PageContainer(props) {
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}
