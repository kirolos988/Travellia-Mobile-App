import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './AppSlice';

const store = configureStore({
  reducer:{
    Favorite: favoriteReducer,
  }
});

export default store;
