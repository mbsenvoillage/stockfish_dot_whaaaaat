import styled, {keyframes} from "styled-components";

export const StyledSubCall = styled.div`
    font-family: ${({theme: {fonts}})=>fonts.serif};
    color: ${({theme: {colors}})=>colors.darknightBlue};
    text-align: right;
    flex: 1;
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
