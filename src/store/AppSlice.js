import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const initialState = {
  favorites: [],
  loading: true, // Add loading state to indicate whether favorites are loaded
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      state.loading = false;
    },
    addToFavorites: (state, action) => {
      const favorite = action.payload;
      state.favorites.push(favorite);
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites)).catch(
        (error) => {
          console.log('Error while adding to favorites:', error);
        },
      );
    },
    removeFromFavorites: (state, action) => {
      const favoriteId = action.payload;
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteId,
      );
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites)).catch(
        (error) => {
          console.log('Error while removing from favorites:', error);
        },
      );
    },
  },
});

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;

// Action to load favorites from AsyncStorage
export const loadFavorites = () => async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    if (favorites) {
      dispatch(setFavorites(JSON.parse(favorites)));
    }
  } catch (error) {
    console.log('Error while loading favorites:', error);
  }
};
