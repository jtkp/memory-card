import { createGlobalStyle } from "styled-components";
import RobotoLight from "./assets/fonts/Roboto-Light.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLight}) format('tff');

  body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }
}
`;

export default FontStyles;
