import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.heading}>Explore</Text>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Hotels')}
        >
          <View style={styles.buttonContent}>
            <Ionicons
              name="ios-bed-outline"
              size={24}
              color="black"
              style={{ marginRight: 3 }}
            />
            <Text style={styles.buttonText}>Hotels</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Restaurants')}
        >
          <View style={styles.buttonContent}>
            <Ionicons
              name="restaurant-outline"
              size={24}
              color="black"
              style={{ marginRight: 0.3 }}
            />
            <Text style={styles.buttonText}>Restaurants</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.lastButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ThingsToDo')}
        >
          <View style={styles.buttonContent}>
            <Entypo
              name="air"
              size={24}
              color="black"
              style={{ marginRight: 3 }}
            />
            <Text style={styles.buttonText}>Things To Do</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#85E8B5',
    height: 320,
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: 30,
    fontWeight: '800',
    paddingLeft: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
  },
  touchableContainer: {
    marginTop: 25,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    height: 59,
    borderRadius: 25,
    overflow: 'hidden',
  },
  lastButton: {
    marginHorizontal: 5,
    flex: 1,
    borderRadius: 25,
    height: 59,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 10,
  },
});

export default Header;
