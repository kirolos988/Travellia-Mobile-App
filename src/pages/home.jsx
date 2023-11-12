import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import SearchResultComponent from '../components/SearchResult/SearchResultComponent';
import { hotelsAxios } from '../store/AxiosUrl';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await hotelsAxios();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {hotels.length > 0 ? (
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
        <p>Loading...</p>
      )}
    </SafeAreaView>
  );
};

export default Home;
