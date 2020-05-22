const GET_CATEGORIES = "GET_CATEGORIES";

export const setCategory = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});

const initialState = [];

export function categoriesReducer(store = initialState, { type, payload }) {
  switch (type) {
    case GET_CATEGORIES:
      return [...store, ...payload];
    default:
      return store;
  }
}

export const getCategories = () => async (dispatch) => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const json = await response.json();
  dispatch(setCategory(json));
};
