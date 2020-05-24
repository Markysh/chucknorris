import React from "react";
import { GlobalStyle } from "./globalStyle";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Main } from "./components/Main/Main";
import { LoadCategories } from "./LoadCategories";

function App() {
  return (
    <Provider store={store}>
      <LoadCategories />
      <GlobalStyle />
      <Main />
    </Provider>
  );
}

export default App;
