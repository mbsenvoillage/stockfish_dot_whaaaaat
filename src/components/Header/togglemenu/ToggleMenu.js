import {StyledToggleMenu, ToggleText } from './ToggleMenu.styled';
import NavMenu from "../../NavMenu/NavMenu";
import React, {useState} from "react";
import { BiMinus } from 'react-icons/bi';

export default function ToggleMenu(props) {
    const [on, setOn] = useState(false);
    const onClick = () => {
        console.log("you clicked me")
        setOn(!on);
    }
    const handleNavClick = () => {
        setOn(!on);
    }

    return (
        <>
        <StyledToggleMenu>
            <ToggleText role="navigation" aria-label="Menu toggle" onClick={onClick} on={on ? "on" : "off"}>
                <div>menu</div>
            </ToggleText>
        </StyledToggleMenu>
        <NavMenu on={on ? "on" : "off"} handleClick={handleNavClick}/>
        </>
    )
}
/*
                <img src={shape} alt="Toggle menu sub-shape"/>

 */
