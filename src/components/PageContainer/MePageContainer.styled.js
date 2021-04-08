import styled from 'styled-components';

export const StyledMePageContainer = styled.div`
  display: grid;
  //grid-template-rows: .2fr 1fr .5fr .6fr .6fr 2fr .5fr;
  background-color:  ${({theme: {colors}})=>colors.darkestnightBlue};
  //grid-gap: 4%;
  grid-gap: clamp(3rem,10.2vw,10rem);
  
  div:nth-child(4) {
      background-color: ${({theme: {colors}})=>colors.darkerhatRed};
      padding: clamp(1rem, 5.2vw, 9rem);
      width: 100vw;
      min-width: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
    
  }
  div:nth-child(5) {
    //padding: clamp(1rem, 5.2vw, 9rem);
    //margin-top: -4%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:nth-child(6) {
    display: grid;
    grid-gap: clamp(2rem,3vw,7rem);
    div:nth-child(1) {
      //margin-bottom: clamp(2rem,3vw,7rem);
      div:nth-child(2) {
          margin-top: clamp(2rem, 8vw, 7rem);
      }
    }
    div:nth-child(2) {
      margin: 0 auto;
    }
  }
  div:nth-child(7) {
    align-self: center;
    div {
      display: flex;
      justify-content: center;
    }
  }
`;
