import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from '../pages/home';
import Search from '../pages/Search';
import Favourites from '../pages/favourites';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator  tabBarOptions={{
          activeTintColor: 'black',
          
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            borderTopColor: '#84E9BD',
            borderTopWidth: 2,
          },
         
        }}>
      <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Explore',
            tabBarLabelPosition: 'below-icon',
          }}/>
          <Tab.Screen name="Favourites" component={Favourites} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Favourites',
            tabBarLabelPosition: 'below-icon'
          }}/>
      <Tab.Screen name="Settings" component={Search} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-search-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Search',
            tabBarLabelPosition: 'below-icon'
          }} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router