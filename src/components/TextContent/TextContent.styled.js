import styled from "styled-components";

export const SideWaysText = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: white;
    text-align: justify;
  }
  height: 12rem;
  ${(props)=>props.theme.mQuery("m")`height: 16rem;`}
  ${(props)=>props.theme.mQuery("l")`height: 20rem;`}
  ${(props)=>props.theme.mQuery("xl")`height: 24rem;`}
  ${(props)=>props.theme.mQuery("xxl")`height: 28rem; p {font-size: 1.8rem;}`}
  ${(props)=>props.theme.mQuery("xxxl")`height: 32rem; p {font-size: 2rem;}`}
`;

export const TextBox = styled.div`
  display: grid;
  grid-gap: 3vw;
  text-align: justify;
  color: white;
  align-items: center;
  border: 1px solid;
  height: fit-content;
  padding: 2vw;
  max-width: 35rem;
  div:nth-child(1) {
    text-align: center;
  }
  justify-self: center;
`;

export const RevertText = styled.div`
  direction: rtl;
  unicode-bidi: bidi-override;
  transform: rotateY(
      180deg
  );
`;

