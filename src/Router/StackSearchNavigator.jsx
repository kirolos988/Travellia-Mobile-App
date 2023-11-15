import React from 'react';
import Search from '../pages/Search';
import SearchedHotels from '../pages/SearchedHotels';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SinglePage from '../pages/SinglePage/SinglePage';
const Stack = createNativeStackNavigator();

const StackSearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 10,
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
        name="SearchedHotels"
        component={SearchedHotels}
        options={{
          title: 'Hotels and Places to Stay',
        }}
      />

      <Stack.Screen
        name="SinglePage"
        component={SinglePage}
        options={{ title: 'single page' }}
      />
    </Stack.Navigator>
  );
};

export default StackSearchNavigator;
