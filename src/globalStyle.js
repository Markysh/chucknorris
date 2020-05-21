import { createGlobalStyle } from "styled-components";
import RobotoBold from "../src/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../src/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../src/fonts/Roboto-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto";
  }

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
}

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: fallback;
}

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-style: normal;
    font-weight: bold;
    font-display: fallback;
}
`;
