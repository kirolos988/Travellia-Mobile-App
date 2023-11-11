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
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"white",
        tabBarItemStyle:{
        borderTopColor: '#34E0A1',
        borderTopWidth: 4,
        },
        gestureEnabled: true,
        tabBarInactiveTintColor:"#999",
        tabBarStyle: {
          backgroundColor:"#222",
          // borderTopColor: '#34E0A1',
          // borderTopWidth: 4,
        },
        headerShown:false,
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
<<<<<<< HEAD
          headerShown:false
        }}/>  
=======
          style: {
            // borderTopColor: '#84E9BD',
            // borderTopWidth: 3,
          },
          
        }} />  
>>>>>>> e6bb4e6da23e2581baad9ada7b01f9bbee5598dc
        <Tab.Screen name="Settings" component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-search-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Search',
          tabBarLabelPosition: 'below-icon',
        }} />
        <Tab.Screen name="Favourites" component={Favourites} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Favourites',
          tabBarLabelPosition: 'below-icon',
          //  tabBarItemStyle:{
          //   // borderTopColor:"#84E9BD",
          //   // borderTopWidth: 3,
          // }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router