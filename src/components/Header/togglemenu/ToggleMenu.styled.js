import styled from 'styled-components';

export const ToggleText = styled.div`
  color: ${({theme: {colors}})=> colors.winterhatRed};
  font-family: ${({theme: {fonts}})=> fonts.serif};
  font-size: 22px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  display: grid;
  ${({theme}) => theme.mQuery("s")`font-size: 26px; img { width: 26px}`};
  ${({theme}) => theme.mQuery("m")`font-size: 30px; img { width: 30px}`};
  ${({theme}) => theme.mQuery("l")`font-size: 34px; img { width: 34px}`};
  ${({theme}) => theme.mQuery("xl")`font-size: 38px; img { width: 38px}`};
`;

export const StyledToggleMenu = styled.div`
  width: fit-content;
  height: fit-content;
`;





