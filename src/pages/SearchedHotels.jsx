import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import SearchResultComponent from '../components/SearchResultComponent/SearchResultComponent';

const SearchedHotels = () => {
  const hotelsInCity = useRoute().params;
  console.log(hotelsInCity);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={
          hotelsInCity.hotels || hotelsInCity.restaurants || hotelsInCity.todos
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SearchResultComponent
            image={item.images[0]}
            name={item.name}
            rating={item.rating}
            locationName={item.location.locationName}
            reviews={item.reviews}
            website={item.website}
            money={item.money}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SearchedHotels;