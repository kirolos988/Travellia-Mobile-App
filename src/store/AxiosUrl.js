import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://travelya.onrender.com',
});

export const cities = async () => {
  try {
    const response = await axiosInstance.get('/cities');
    console.log(response.data.cities);
    return response.data.cities;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
export const hotelsAxios = async () => {
  try {
    const response = await axiosInstance.get('/cities/hotels');
    console.log(response.data.hotels);
    return response.data.hotels;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
export const restaurants = async () => {
  try {
    const response = await axiosInstance.get('/cities/restaurants');
    console.log(response.data.restaurants);
    return response.data.restaurants;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
export const thingsToDo = async () => {
  try {
    const response = await axiosInstance.get('/cities/thingsToDo');
    console.log(response.data.todos);
    return response.data.todos;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
