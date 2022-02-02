import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color:${({ theme }) => (theme.name === "Dark" ? "white !important" : "")};
    margin: 0;
    padding: 0;
  }
  
  a{
    color:${({ theme }) => (theme.name === "Dark" ? "white !important" : "")};
    
    &:hover{
      color:${({ theme }) => (theme.name === "Dark" ? "grey !important" : "")};
    }
  }
`;

export default GlobalStyle;
