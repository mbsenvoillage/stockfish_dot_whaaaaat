import styled from "styled-components";

export const StyledSubCall = styled.div`
    font-family: ${({theme: {fonts}})=>fonts.serif};
    color: ${({theme: {colors}})=>colors.darknightBlue};
    text-align: right;
    p {
      font-size: 36px;
      line-height: 1em;
    }
  ${({theme}) => theme.mQuery("xs")`p { font-size: 46px}`};
  ${({theme}) => theme.mQuery("s")`p { font-size: 56px}`};
  ${({theme}) => theme.mQuery("xl")`p { font-size: 66px}`};
  ${({theme}) => theme.mQuery("xxl")`p { font-size: 76px}`};
`;
