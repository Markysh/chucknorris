import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jokeReducer } from "./randomJoke";
import { categoriesReducer } from "./categories";
import { favoritesReducer } from "./favorites";

const rootReducer = combineReducers({
  jokes: jokeReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
