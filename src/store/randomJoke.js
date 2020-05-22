const SET_JOKE = "GET_JOKE";

export const setJokes = (payload) => ({
  type: SET_JOKE,
  payload,
});

const initialState = [];

export function jokeReducer(store = initialState, { type, payload }) {
  switch (type) {
    case SET_JOKE:
      return [...payload];
    default:
      return store;
  }
}

export const getRandomJoke = () => async (dispatch) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await response.json();
  dispatch(setJokes([json]));
};

export const getRandomCategoryJoke = (category) => async (dispatch) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  const json = await response.json();
  dispatch(setJokes([json]));
};

export const getSearchJoke = (query) => async (dispatch) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );
  const json = await response.json();
  dispatch(setJokes(json.result.slice(0, 5)));
};
