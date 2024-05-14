import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Noto Sans", sans-serif;
  
}

a{
  text-decoration: none;
}

ul {
  list-style: none;
}

button{
  cursor: pointer;
}

html, body, #root {
  width: 100%;
  min-height: 100dvh;
}

button {
  cursor: pointer;
}

`;
