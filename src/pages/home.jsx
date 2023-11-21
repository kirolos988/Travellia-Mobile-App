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
      <Addvertise
        img={'roadtrips.jpg'}
        header="The Essential road-trip guide"
        text="Everything you need to pack up, drive.and enjoy the ride."
      />
      <RandomCardComponent
        category={'restaurants'}
        categoryName="Restaurants"
      />
      <Addvertise
        img={'europe.jpg'}
        header="Do something different this Thanksgiving"
        text="Head to Europe for smaller crowds-and tones of memories"
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
