const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const addFavoriteAction = (payload) => ({
  type: ADD_FAVORITE,
  payload,
});

const removeFavoriteAction = (payload) => ({
  type: REMOVE_FAVORITE,
  payload,
});

const favoritesFromStore = JSON.parse(localStorage.getItem("favorites"));
const initialState = favoritesFromStore || [];

export function favoritesReducer(store = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return [...store, payload];
    case REMOVE_FAVORITE:
      const index = store.indexOf(payload);
      return [
        ...store.slice(0, index),
        ...store.slice(index + 1, store.length),
      ];
    default:
      return store;
  }
}

export const addFavorite = (joke) => (dispatch) => {
  dispatch(addFavoriteAction(joke));
};

export const removeFavorite = (joke) => (dispatch) => {
  dispatch(removeFavoriteAction(joke));
};
