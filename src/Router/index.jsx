import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Favourites from '../pages/Favourites';
import StackExploreNavigator from './StackExploreNavigator';
import StackSearchNavigator from './StackSearchNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundPage from '../pages/NotFoundPage';
const Tab = createBottomTabNavigator();
const NotFoundStack = createNativeStackNavigator();

// const RootStack = createNativeStackNavigator();

const Router = () => {
  // const [isNotFoundVisible, setIsNotFoundVisible] = useState(false);

  // const showNotFound = () => {
  //   setIsNotFoundVisible(true);
  // };
  // const hideNotFound = () => {
  //   setIsNotFoundVisible(false);
  // };

  //   return (
  //     <NavigationContainer>
  //       <RootStack.Navigator mode="modal">
  //         <RootStack.Screen
  //           name="Main"
  //           component={MainTabs}
  //           options={{ headerShown: false }}
  //         />
  //         <RootStack.Screen
  //           name="NotFound"
  //           component={NotFoundPage}
  //           options={{ headerShown: false }}
  //         />
  //       </RootStack.Navigator>
  //     </NavigationContainer>
  //   );
  // };

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
          tabBarActiveTintColor: 'white',
        }}
      >
        {/* {isNotFoundVisible && (
          <NotFoundStack.Navigator
            mode="modal"
            screenOptions={{ headerShown: false }}
          >
            <NotFoundStack.Screen
              name="NotFoundModal"
              component={NotFoundPage}
              options={{ title: 'Not Found' }}
            />
          </NotFoundStack.Navigator>
        )} */}
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
            tabBarActiveTintColor: 'white',
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
            tabBarActiveTintColor: 'white',
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
            tabBarActiveTintColor: 'white',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
