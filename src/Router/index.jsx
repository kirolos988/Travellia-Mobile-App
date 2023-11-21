import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Favourites from '../pages/Favourites';
import StackExploreNavigator from './StackExploreNavigator';
import StackSearchNavigator from './StackSearchNavigator';
import HotelReservation from '../pages/Reservation/Hotel-reservation';
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          inactiveTintColor: 'gray', 
          tabBarStyle: {
            backgroundColor: '#222',
            borderTopColor: '#222',
            borderTopWidth: 1,
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          headerShown: false,
          tabBarActiveTintColor: 'white'
        }}
      >
        <Tab.Screen
          name="exploreStack"
          component={StackExploreNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Explore',
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
            tabBarActiveTintColor: 'white'
          }}
        />
        <Tab.Screen
          name="SearchStack"
          component={StackSearchNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-search-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Search',
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
            tabBarActiveTintColor: 'white'
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Favourites',
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
            tabBarActiveTintColor: 'white'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
