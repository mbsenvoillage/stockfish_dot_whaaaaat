import styled from 'styled-components';

export const StyledLogo = styled.div`
  width: 3rem;
  ${({theme}) => theme.mQuery("xs")(theme.logoSize("xs"))};
  ${({theme}) => theme.mQuery("s")(theme.logoSize("s"))};
  ${({theme}) => theme.mQuery("m")(theme.logoSize("m"))};
  ${({theme}) => theme.mQuery("l")(theme.logoSize("l"))};
  ${({theme}) => theme.mQuery("xl")(theme.logoSize("xl"))};
  ${({theme}) => theme.mQuery("xxl")(theme.logoSize("xl"))};
  img {
    width: inherit;
  }
`;

/*
${({theme}) => theme.mQuery("s")`width: 120px; `};
  ${({theme}) => theme.mQuery("m")`width: 140px; `};
  ${({theme}) => theme.mQuery("l")`width: 160px; `};
  ${({theme}) => theme.mQuery("xl")`width: 180px; `};
 */


