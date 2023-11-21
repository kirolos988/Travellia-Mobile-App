import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hotels from '../pages/Hotels';
import Restaurants from '../pages/Restaurants';
import ThingsToDo from '../pages/ThingsToDo';
import Home from '../pages/Home';
const Stack = createNativeStackNavigator();

const StackExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
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
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#181818",
          }
        }}
      />
      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          title: 'Restaurants',
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#181818",
          }
        }}
      />
      <Stack.Screen
        name="ThingsToDo"
        component={ThingsToDo}
        options={{
          title: 'Things To Do',
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#181818",
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default StackExploreNavigator;
