import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
    font-family: 'Noto Serif', serif;
}


a{
   color: black;
}

.colors{
    color: #911F27;
    color: #630A10;
    color: #FCF0C8;
    color: #FACE7F;
    
}

`;

export default GlobalStyle;