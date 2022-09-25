import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  recipesRequest: false,
  recipesRequestFailed: false,
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    recipesRequestAction: (state) => {
      state.recipesRequest = true;
      state.recipesRequestFailed = false;
    },
    recipesRequestSuccessAction: (state, action) => {
      state.recipes = action.payload;
      state.recipesRequest = false;
    },
    recipesRequestFailedAction: (state) => {
      state.recipesRequestFailed = true;
      state.recipesRequest = false;
    },
  }
});

const {actions, reducer} = recipesSlice;

export const {
  recipesRequestAction,
  recipesRequestSuccessAction,
  recipesRequestFailedAction
} = actions;

export default reducer
