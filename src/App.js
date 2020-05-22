import React from "react";
import { GlobalStyle } from "./globalStyle";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Container } from "./app.styles";
import { Main } from "./components/Main/Main";
import { Side } from "./components/Side/Side";
import { LoadCategories } from "./LoadCategories";

function App() {
  return (
    <Provider store={store}>
      <LoadCategories />
      <Container>
        <Main />
        <Side />
        <GlobalStyle />
      </Container>
    </Provider>
  );
}

export default App;
