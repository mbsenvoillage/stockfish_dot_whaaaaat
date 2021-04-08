import styled from "styled-components";

export const StyledNav = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  transition: all 1s;
  transform: ${(props)=> props.on === "on" ? "translate3d(0vw, 0, 0);" : "translate3d(100vw, 0, 0);"}
  position: fixed;
  top: clamp(2rem,5vw,6rem);
  right: clamp(2rem,5vw,6rem);
  visibility: ${(props)=> props.on === "on" ? "visible;" : "hidden;"};
  nav {
    margin-top: clamp(2rem,5vw,6rem);
  }
`;


export const NavList = styled.ul`
  color: white;
  text-align: right;
  transform: ${(props)=> props.on === "on" ? "translateY(0);" : "translateY(-100%);"}
  transition: all 2s;
  li {
    font-family: ${({theme: {fonts}}) => fonts.serif};
    list-style: none;
    font-size: clamp(2.6rem,7vw,9rem);
    font-weight: 700;
  }
`;
