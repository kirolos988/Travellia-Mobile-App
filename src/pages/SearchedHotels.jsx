import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import SearchResultComponent from '../components/SearchResultComponent/SearchResultComponent';

const SearchedHotels = () => {
  const categoryInCity = useRoute().params;
  const navigation = useNavigation();

  const CustomBackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        // source={require('../components')}
        style={{ width: 24, height: 24, tintColor: 'white' }}
      />
    </TouchableOpacity>
  );

  useEffect(() => {
    navigation.setOptions({
      title:
        categoryInCity.category.length > 1
          ? categoryInCity.title
          : categoryInCity.specifiedTitle,
      headerStyle: {
        backgroundColor: '#181818',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',

      // headerLeft: () => {
      //   <CustomBackButton
      //     onPress={() => {
      //       <AntDesign name="left" size={24} color="black" />;
      //     }}
      //   />;
      // },
    });
  }, [categoryInCity, navigation]);
  return (
    <FlatList
      data={categoryInCity.category}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <SearchResultComponent
          item={item}
          title={item.name}
          id={item.id}
          image={item.images[0]}
          name={item.name}
          rating={item.rating}
          locationName={item.location?.locationName}
          address={item.address}
          reviews={item.reviews}
          website={item.website}
          money={item.money}
        />
      )}
    />
  );
};

export default SearchedHotels;
