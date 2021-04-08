import {StyledToggleMenu, ToggleText, ToggleCircle} from './ToggleMenu.styled';
import NavMenu from "../../NavMenu/NavMenu";
import React, {useState} from "react";

export default function ToggleMenu(props) {
    const [on, setOn] = useState(false);
    const [overflow, setOverflow] = useState(false);
    const onClick = () => {
        setOn(!on);
        overflow ? document.body.classList.remove('overflow') : document.body.classList.add('overflow');
        setOverflow(!overflow);
    }
    const handleNavClick = () => {
        setOn(!on);
        setOverflow(!overflow);
        document.body.classList.remove('overflow');
    }

    return (
        <>
        <StyledToggleMenu>
            <ToggleText role="navigation" aria-label="Menu toggle" onClick={onClick} on={on ? "on" : "off"}>
                <p>menu</p>
            </ToggleText>
            <ToggleCircle on={on ? "on" : "off"}/>
        </StyledToggleMenu>
        <NavMenu on={on ? "on" : "off"} handleClick={handleNavClick}/>
        </>
    )
}
/*
                <img src={shape} alt="Toggle menu sub-shape"/>

 */
