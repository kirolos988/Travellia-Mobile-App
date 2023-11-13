import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hotels from '../pages/Hotels/Hotels';
import Restaurants from '../pages/Restaurants/Restaurants';
import ThingsToDo from '../pages/ThingsToDo/ThingsToDo';
import Home from '../pages/Home';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hotels"
        component={Hotels}
        options={{
          title: 'Hotels and Places to Stay',
        }}
      />
      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          title: 'Restaurants',
        }}
      />
      <Stack.Screen
        name="ThingsToDo"
        component={ThingsToDo}
        options={{
          title: 'Things To Do',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
