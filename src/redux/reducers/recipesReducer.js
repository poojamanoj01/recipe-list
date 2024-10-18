// src/redux/reducers/recipesReducer.js
import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPE_DETAIL_SUCCESS,
} from '../actions';

const initialState = {
  recipes: [],
  loading: false,
  error: '',
  selectedRecipe: null,
  currentPage: 1,
  totalPages: 0,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return { ...state, loading: true, error: '' };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload.recipes,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage, // Update the currentPage here
      };
    case FETCH_RECIPES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_RECIPE_DETAIL_SUCCESS:
      return { ...state, selectedRecipe: action.payload };
    default:
      return state;
  }
};

export default recipesReducer;
