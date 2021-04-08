import React from 'react';
import { StyledNav, NavList } from "./NavMenu.styled";


export default function NavMenu(props) {
    return (
        <StyledNav on={props.on} onClick={props.handleClick}>

            <nav>
                <NavList on={props.on}>
                    <li>work</li>
                    <li>me</li>
                    <li>let's talk</li>
                </NavList>
            </nav>
        </StyledNav>
    )
}
