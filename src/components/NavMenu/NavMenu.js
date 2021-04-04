import React from 'react';
import { StyledNav, NavList } from "./NavMenu.styled";
import { BiMinus } from 'react-icons/bi';
import stdraw from '../../assets/images/stockfish-draw.png';

export default function NavMenu(props) {
    return (
        <StyledNav on={props.on} onClick={props.handleClick}>

            <nav>
                <NavList on={props.on}>
                    <li><BiMinus/></li>
                    <li>work</li>
                    <li>me</li>
                    <li>let's talk</li>
                </NavList>
            </nav>
        </StyledNav>
    )
}
