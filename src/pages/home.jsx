import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import Addvertise from '../components/adds/Addvertise';
import RandomCardComponent from '../components/RandomCardComponent/RandomCardComponent';
import Add from '../components/adds/Add';
// import img1 from '../components/adds/assets/';
// import img2 from '../components/adds/assets/';

const Home = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      <RandomCardComponent category={'hotels'} categoryName="Hotels" />
      <Addvertise
        img={require('../components/adds/assets/roadtrips.jpg')}
        header="The Essential road-trip guide"
        text="Everything you need to pack up, drive.and enjoy the ride."
      />
      <RandomCardComponent
        category={'restaurants'}
        categoryName="Restaurants"
      />
      <Addvertise
        img={require('../components/adds/assets/europe.jpg')}
        header="Do something different this Thanksgiving"
        text="Head to Europe for smaller crowds-and tones of memories"
      />
      <Add title="Discover more in Rome" buttonText="Keep exploring" />
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
