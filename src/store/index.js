import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jokeReducer } from "./randomJoke";
import { categoriesReducer } from "./categories";

const rootReducer = combineReducers({
  jokes: jokeReducer,
  categories: categoriesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
