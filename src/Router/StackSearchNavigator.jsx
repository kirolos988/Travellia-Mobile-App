import React from 'react';
import Search from '../pages/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SinglePage from '../pages/SinglePage';
import SearchedCategory from '../pages/SearchedCategory';
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
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#181818',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackSearchNavigator;
