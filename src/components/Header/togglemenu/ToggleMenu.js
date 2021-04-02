import React from "react";
import {StyledToggleMenu, ToggleText } from './ToggleMenu.styled';
import shape from '../../../assets/images/toggle-shape.png';

export default function ToggleMenu() {

    return (
        <StyledToggleMenu>

            <ToggleText role="navigation" aria-label="Menu toggle">
                menu
                <img src={shape} alt="Toggle menu sub-shape"/>
            </ToggleText>


        </StyledToggleMenu>
    )
}
