import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }


    /* 
    - Putting font size to 62.25% to put 1rem for 10px to make it easy for us - Default is 1rem for 16px.
    - Benefits:
      . Make it simple to work with sizes and media queries
    */
    html {
    font-size: 62.25%;
    scroll-behavior: smooth;
    }

    body {
    font-family: "Raleway";
    font-weight: 400;
    overflow-y: hidden;
    }

    input, button{
        font-family: 'Raleway';
    }

    #root > *{
      padding: 4rem 10rem;
    }
    
`;

export default GlobalStyle;
