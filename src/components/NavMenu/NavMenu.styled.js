import styled from "styled-components";

export const StyledNav = styled.div`
  background-color: ${({theme: {colors}}) => colors.winterhatRed};
  min-height: calc(100vh + 2rem);
  min-width: 100vw;
  font-family: ${({theme: {fonts}}) => fonts.serif};
  align-items: center;
  padding: 2rem;
  transition: all 1s;
  transform: ${(props)=> props.on === "on" ? "translate3d(0vw, 0, 0);" : "translate3d(-100vw, 0, 0);"}
  position: fixed;
  top: -4vh;
  left: 0;
  visibility: ${(props)=> props.on === "on" ? "visible;" : "hidden;"};
`;


export const NavList = styled.ul`
  color: white;
  text-align: right;
  transform: ${(props)=> props.on === "on" ? "translateY(0);" : "translateY(-100%);"}
  transition: all 2s;
  li {
    list-style: none;
    font-size: calc(1rem + 4vw);
    font-weight: 700;
  }
`;
