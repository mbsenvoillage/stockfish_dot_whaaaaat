import styled from "styled-components";

export const StyledSkillsList = styled.div`
    display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2vw;
  p {
    font-size: clamp(2rem, 9.5vw, 12rem);
    color: ${(props)=> props.color ? props.color : "black"};
  }
`;
