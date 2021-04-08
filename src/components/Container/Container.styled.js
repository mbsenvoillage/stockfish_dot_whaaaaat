import styled from "styled-components";

export const OuterContainer = styled.div`
    padding: 0 clamp(2rem,5vw,6rem) 0 clamp(2rem,5vw,6rem);
    ${(props) => props.justify ? `justify-self: ${props.justify};` : ""}
    ${(props) => props.bg ? `background-color: ${props.bg};` : ""}
`;

export const TwoColContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: clamp(2rem,3vw,7rem);
  align-self: center;
  ${(props) => props.align ? `div:nth-child(${props.align}) {
    align-self: flex-end;
  }` : ""}
  & * {
    ${(props) => props.justify ? `justify-self: ${props.justify};` : ""}
  }
`;

