import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import RandomHotelsComponent from '../components/RandomHotelsComponents/RandomHotelsComponents';
import { hotelsAxios } from '../store/AxiosUrl';
import Header from '../components/Header/Header';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await hotelsAxios();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      {loading ? (
        <Text>Loading...</Text>
      ) : hotels.length > 0 ? (
        <FlatList
          horizontal
          snapToInterval={70}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={hotels}
          renderItem={({ item }) => (
            <RandomHotelsComponent
              image={item.images[0]}
              name={item.name}
              rating={item.rating}
              locationName={item.location.locationName}
              reviews={item.reviews}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No hotels available</Text>
      )}
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
