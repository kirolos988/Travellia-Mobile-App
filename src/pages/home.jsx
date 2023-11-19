import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import Addvertise from '../components/adds/Addvertise';
import RandomCardComponent from '../components/RandomCardComponent/RandomCardComponent';

const Home = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      <RandomCardComponent category={'hotels'} categoryName="Hotels" />
      <Addvertise />
      <RandomCardComponent
        category={'restaurants'}
        categoryName="Restaurants"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#181818',
    flex: 1,
  },
});

export default Home;
