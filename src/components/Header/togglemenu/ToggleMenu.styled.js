import styled from 'styled-components';

export const ToggleCircle = styled.div`
  border-radius: 50%;
  width: clamp(2rem,5vw,6rem);
  height: clamp(2rem,5vw,6rem);
  position: fixed;
  transform: ${(props) => props.on === "on" ? "scale(100)" : "scale(0)"};
  transition: transform 1.5s;
  background-color: ${(props) => props.theme.colors.winterhatRed};
  top: clamp(2rem,5vw,6rem);
`;

export const ToggleText = styled.div`
  p {
    font-family: ${({theme: {fonts}})=> fonts.serif};
    color: white;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
  }
  position: sticky;
  right: clamp(2rem,5vw,6rem);
  z-index: 30;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledToggleMenu = styled.div`
  
`;
