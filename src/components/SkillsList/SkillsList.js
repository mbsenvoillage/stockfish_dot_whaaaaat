import React from 'react';
import {IoLogoCss3, IoLogoJavascript} from "react-icons/io";
import {FaReact, FaSass, FaJava, FaPhp, FaSymfony, FaDocker} from 'react-icons/fa'
import {SiMysql, SiStyledComponents, SiBootstrap, SiLinux} from "react-icons/all";
import {StyledSkillsList} from "./SkillsList.styled";

export default function SkillsList(props) {
    const frontend = function() {
        return (
            <>
                <p><IoLogoCss3 id="css" title="Css3 front-end skill" role="img" desc="CSS3 icon"/></p>
                <p><FaReact id="react" title="React.js front-end skill" role="img" desc="React icon"/></p>
                <p><IoLogoJavascript id="js" title="Javascript front-end skill" role="img" desc="Javascript icon"/></p>
                <p><FaSass id="sass" title="Sass front-end skill" role="img" desc="Sass icon"/></p>
                <p><SiStyledComponents id="styledcomponents" title="Styled components front-end skill" role="img" desc="Styled components icon"/></p>
                <p><SiBootstrap id="bootstrap" title="Bootstrap front-end skill" role="img" desc="Bootstrap icon"/></p>
            </>
        )
    }
    const backend = function() {
        return (
        <>
            <p><FaJava id="java" title="Java backend skill" role="img" desc="Java icon"/></p>
            <p><FaPhp id="php" title="Php backend skill" role="img" desc="Php icon"/></p>
            <p><FaSymfony id="symfony" title="Symfony backend skill" role="img" desc="Symfony icon"/></p>
            <p><SiMysql id="MySQL" title="MySql backend skill" role="img" desc="MySql icon"/></p>
            <p><SiLinux id="Linux" title="Linux backend skill" role="img" desc="Linux icon"/></p>
            <p><FaDocker id="Docker" title="Docker backend skill" role="img" desc="Docker icon"/></p>
        </>
        )
    }
    return(
        <StyledSkillsList color={props.color}>
            {props.front ? frontend() : backend()}
        </StyledSkillsList>
    )
}
