import React from "react";
import { GlobalStyle } from "./globalStyle";
import { Container } from "./app.styles";
import { Main } from "./components/Main/Main";
import { Side } from "./components/Side/Side";

function App() {
  return (
    <Container>
      <Main />
      <Side />
      <GlobalStyle />
    </Container>
  );
}

export default App;
