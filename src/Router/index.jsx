import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Search from '../pages/Search';
import Favourites from '../pages/Favourites';
import StackExploreNavigator from './StackExploreNavigator';
import StackSearchNavigator from './StackSearchNavigator';
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            borderTopColor: '#222',
            borderTopWidth: 1,
            backgroundColor: '#222',
          },
          headerShown: false,
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
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
