import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    height: 100%;
  }
  html {
    
    font-size: 100%;
    
    h1 {
      font-size: clamp(2.6rem, 5vw, 4rem);
    }
    h2 {
      font-size: clamp(1rem, 2.5vw, 2rem);
    }
    p {
      font-size: clamp(.8rem, 1vw, 2rem);
    }
  }
  body {
    background-color: ${({theme})=> theme.colors.darkestnightBlue};
    font-family: ${({theme})=> theme.fonts.serif};
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
`;
