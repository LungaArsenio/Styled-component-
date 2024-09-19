import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700&display=swap');



* {
  box-sizing: border-box;
}

body{
  background: ${({ theme }) => theme.colors.body};
  font-family: 'Poppins', sans-serif;
  margin: 0;
  font-size: 1.15em;
}

img {
  max-width: 100%;
}

`
export default GlobalStyles;
