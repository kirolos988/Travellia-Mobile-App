import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, ScrollView, Text } from 'react-native';
import SearchResultComponent from '../components/SearchResult/SearchResultComponent';
import { hotelsAxios } from '../store/AxiosUrl';

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
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        {loading ? (
          <Text>Loading...</Text>
        ) : hotels.length > 0 ? (
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={hotels}
            renderItem={({ item }) => (
              <SearchResultComponent
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#181818',
    flex: 1,
  },
});

export default Home;
