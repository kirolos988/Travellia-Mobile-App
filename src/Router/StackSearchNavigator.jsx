import React from 'react';
import Search from '../pages/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SinglePage from '../pages/SinglePage';
import SearchedCategory from '../pages/SearchedCategory';
// import HotelReservation from '../pages/Reservation/HotelReservation';
// import RestrauntReservation from '../pages/Reservation/RestaurantReservation';
// import ThingsToDoReservation from '../pages/Reservation/ThingsToDoReservation';
const Stack = createNativeStackNavigator();

const StackSearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchedCategory"
        component={SearchedCategory}
        options={{
          title: 'Hotels and Places to Stay',
        }}
      />
      <Stack.Screen
        name="SinglePage"
        component={SinglePage}
        options={{
          title: '',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#181818',
          },
        }}
      />
       {/* <Stack.Screen
        name="Hotel Reservation"
        component={HotelReservation}
        options={{
          title: 'Hotel Reservation',
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#181818",
          }
        }}
      />
      <Stack.Screen
        name="Restraunt Reservation"
        component={RestrauntReservation}
        options={{
          title: 'Restraunt Reservation',
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#181818",
          }
        }}
      />
      <Stack.Screen
        name="Trip Reservation"
        component={ThingsToDoReservation}
        options={{
          title: 'Trip Reservation',
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#181818",
          }
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackSearchNavigator;
