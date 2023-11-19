import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import SearchResultComponent from '../components/SearchResultComponent';
import { loadFavorites } from '../store/AppSlice';

const Favourites = () => {
  const favorites = useSelector((state) => state.Favorite.favorites);
  dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadFavorites())

  },[])
  // const handleRemoveFavorite = favoriteId => {
  //   dispatch(removeFromFavorites(favoriteId));
  // };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.header}>Favorite Items</Text>
      <View>
        {favorites.length === 0 ? (
          <View style={{ flex: 1 }}><Text style={{color:"white"}}>No favorites yet</Text></View>
        ) : (
          <FlatList
            style={{ backgroundColor: '#181718' }}
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SearchResultComponent
              // handleRemoveFavorite={handleRemoveFavorite(item.id)}
                item={item}
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
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#181718',
    paddingVertical: 20,
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    fontSize: 23,
    marginBottom: 20,
  },
});
