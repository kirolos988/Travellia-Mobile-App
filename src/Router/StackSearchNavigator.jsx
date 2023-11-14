import React from 'react';
import Search from '../pages/Search';
import SearchedHotels from '../pages/SearchedHotels';
import SearchedRestaurants from '../pages/SearchedRestaurants';
import SearchedThingsToDo from '../pages/SearchedThingsToDo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackSearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          // Add other styles as needed
        },
      }}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchedHotels"
        component={SearchedHotels}
        options={{
          title: 'Hotels and Places to Stay',
        }}
      />
      <Stack.Screen
        name="SearchedRestaurants"
        component={SearchedRestaurants}
        options={{
          title: 'Restaurants',
        }}
      />
      <Stack.Screen
        name="SearchedThingsToDo"
        component={SearchedThingsToDo}
        options={{
          title: 'Things To Do',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackSearchNavigator;
