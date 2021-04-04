import styled from 'styled-components';



export const ToggleText = styled.div`
  color: ${(props)=> props.on === "on" ? props.theme.colors.darknightBlue : props.theme.colors.winterhatRed};
  transition: all 1s;
  transform: ${(props)=> props.on === "on" ? "translateX(100vw);" : "translateX(0);"}
  font-family: ${({theme: {fonts}})=> fonts.serif};
  font-size: calc(1rem + 0.4vw);
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  display: grid;
`;

export const StyledToggleMenu = styled.div`
  
`;

/*

export const Squiggle = styled.div`
  overflow: hidden;
  width: 6vw;
  &:before {
    bottom: 35px;
    position: relative;
    content: attr(data-text);
    font-size: 1em;
    color: ${({theme: {colors}})=> colors.lightseaBlue};
    text-decoration-style: wavy;
    text-decoration-color: ${({theme: {colors}})=> colors.winterhatRed};
    text-decoration-line: underline;
    animation: ${squiggle} .5s linear infinite;
  }
`;


const squiggle = keyframes`
  0% {
    left:0;
  }
  100% {
    left: -30px;
  }
`;

 */




