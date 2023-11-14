import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { hotelsAxios } from '../../store/AxiosUrl';
import SearchResultComponent from '../../components/SearchResultComponent/SearchResultComponent';

const Hotels = () => {
  const [hotels, setHotels] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await hotelsAxios();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SearchResultComponent
            image={item.images[0]}
            name={item.name}
            rating={item.rating}
            locationName={item.location.locationName}
            reviews={item.reviews}
            // website={item.website}
            money={item.money}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Hotels;