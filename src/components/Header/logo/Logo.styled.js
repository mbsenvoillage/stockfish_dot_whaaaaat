import styled from 'styled-components';

export const StyledLogo = styled.div`
  width: 100px;
  ${({theme}) => theme.mQuery("s")`width: 120px; `};
  ${({theme}) => theme.mQuery("m")`width: 140px; `};
  ${({theme}) => theme.mQuery("l")`width: 160px; `};
  ${({theme}) => theme.mQuery("xl")`width: 180px; `};
  img {
    width: inherit;
  }
`;


