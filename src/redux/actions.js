import axios from 'axios';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const FETCH_RECIPE_DETAIL_SUCCESS = 'FETCH_RECIPE_DETAIL_SUCCESS';

const BASE_URL = 'https://dummyjson.com/recipes';

// Fetch recipes action with pagination
export const fetchRecipes = (page = 1) => async (dispatch) => {
  dispatch({ type: FETCH_RECIPES_REQUEST });

  try {
    // Fetch recipes with pagination
    const response = await axios.get(`${BASE_URL}?limit=9&skip=${(page - 1) * 9}`);
    
    dispatch({
      type: FETCH_RECIPES_SUCCESS,
      payload: {
        recipes: response.data.recipes,
        totalPages: Math.ceil(response.data.total / 9), // Calculate total pages
        currentPage: page, // Include the current page in the payload
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_RECIPES_FAILURE,
      payload: error.message, // Dispatch error message on failure
    });
  }
};

// Fetch recipe detail action
export const fetchRecipeDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    dispatch({
      type: FETCH_RECIPE_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Failed to fetch recipe detail:', error);
  }
};
