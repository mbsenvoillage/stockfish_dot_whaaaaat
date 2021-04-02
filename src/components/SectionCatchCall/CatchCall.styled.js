import styled from "styled-components";

export const StyledCatchCall = styled.div`
    font-family: ${({theme: {fonts}})=> fonts.sans};
    color: ${({theme: {colors}})=> colors.darknightBlue};
    

    h1 {
      font-size: 46px;
      line-height: 1em;
      font-weight: 600;
      margin: 0;
    }
  ${({theme}) => theme.mQuery("xs")(theme.ftSize("h1", "xs"))};
  ${({theme}) => theme.mQuery("s")(theme.ftSize("h1", "s"))};
  ${({theme}) => theme.mQuery("m")(theme.ftSize("h1", "m"))};
  ${({theme}) => theme.mQuery("l")(theme.ftSize("h1", "l"))};
  ${({theme}) => theme.mQuery("xl")(theme.ftSize("h1", "xl"))};
  ${({theme}) => theme.mQuery("xxl")(theme.ftSize("h1", "xxl"))};
`;
