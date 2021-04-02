import React from "react";
import { StyledLogo } from "./Logo.styled"
import logo from '../../../assets/images/logo.png';

export default function Logo() {
    return (
        <StyledLogo>
            <img src={logo} alt="Logo"/>
        </StyledLogo>
    )
}
