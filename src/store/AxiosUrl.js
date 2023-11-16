import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://travelya.onrender.com',
});

export const citiesAxios = async () => {
  try {
    const response = await axiosInstance.get('/cities');
    return response.data.cities;
  } catch (error) {
    console.log('error');
  }
};
export const hotelsAxios = async () => {
  try {
    const response = await axiosInstance.get('/cities/hotels');
    // console.log(response.data.hotels);
    return response.data.hotels;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
export const restaurantsAxios = async () => {
  try {
    const response = await axiosInstance.get('/cities/restaurants');
    // console.log(response.data.restaurants);
    return response.data.restaurants;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
export const todoAxios = async () => {
  try {
    const response = await axiosInstance.get('/cities/thingsToDo');
    // console.log(response.data.todos);
    return response.data.todos;
  } catch (error) {
    console.log('error');
    throw error;
  }
};

export const Axios = async (category, queryName) => {
  try {
    const response = await axios.get(
      `https://travelya.onrender.com/get/${category}?queryName=${queryName}`,
    );
    return response.data.data;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
