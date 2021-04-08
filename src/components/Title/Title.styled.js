import styled, {keyframes} from "styled-components";

export const StyledTitle = styled.div`
    font-family: ${({theme: {fonts}})=> fonts.sans};
    color: ${({theme: {colors}})=> colors.darknightBlue};
    flex: 2;
      padding: 2rem;
    h1 {
      line-height: 1em;
      font-weight: 400;
      margin: 0;
    }
      ${({theme}) => theme.mQuery("xs")(theme.ftSize("h1", "xs"))};
      ${({theme}) => theme.mQuery("s")(theme.ftSize("h1", "s"))};
      ${({theme}) => theme.mQuery("m")(theme.ftSize("h1", "m"))};
      ${({theme}) => theme.mQuery("l")(theme.ftSize("h1", "l"))};
      ${({theme}) => theme.mQuery("xl")(theme.ftSize("h1", "xl"))};
      ${({theme}) => theme.mQuery("xxl")(theme.ftSize("h1", "xxl"))};

`;

export const StyledSubTitle = styled.div`
    font-family: ${({theme: {fonts}})=>fonts.serif};
    color: ${({theme: {colors}})=>colors.darknightBlue};
    text-align: right;
    flex: 1;
    padding: 2rem;
    h2 {
      line-height: 1em;
      font-weight: 400;
    }
  ${({theme}) => theme.mQuery("xs")(theme.ftSize("h2", "xs"))};
      ${({theme}) => theme.mQuery("s")(theme.ftSize("h2", "s"))};
      ${({theme}) => theme.mQuery("m")(theme.ftSize("h2", "m"))};
      ${({theme}) => theme.mQuery("l")(theme.ftSize("h2", "l"))};
      ${({theme}) => theme.mQuery("xl")(theme.ftSize("h2", "xl"))};
      ${({theme}) => theme.mQuery("xxl")(theme.ftSize("h2", "xxl"))};
  
`;

export const ItalianaCatchCall = styled.div`
  font-family: ${({theme: {fonts}})=>fonts.italiana};
  color: #ffffff;
  h1 {
    font-size: clamp(2.6rem,7vw,9rem);
    font-weight: 100;
  }
  h2, p {
    font-size: clamp(1rem,2.5vw,3rem);
    letter-spacing: clamp(.1rem,1vw,.6rem);
  }
`;

export const TitleStyled = styled.div`
  font-family: ${(props)=> props.theme.fonts[props.font]};
  color: ${(props)=> props.color};
  h1 {
    font-size: clamp(2.6rem,7vw,9rem);
    font-weight: 100;
  }
  h2, p {
    font-size: clamp(1rem,2.5vw,3rem);
  }
`;

export const SpacedLetterSub = styled(TitleStyled)`
  h2, p {
    letter-spacing: clamp(.1rem,1vw,.6rem);
  }
`;

export const RightCall = styled(TitleStyled)`
    h2, p {
      padding-left: ${(props)=> props.padding };
    }
`;

export const SmallerSub = styled(TitleStyled)`
  h2, p {
    font-size: clamp(1rem,2vw,2.5rem);
  }
`;

export const BiggerSub = styled(TitleStyled)`
  h2, p {
    font-size: clamp(1.6rem,5vw,6rem);
    font-weight: 100;
  }
`;

export const ExtraBigSub = styled(TitleStyled)`
  h2, p {
    font-size: clamp(3rem,18vw,12rem);
    font-weight: 100;
  }
`;

