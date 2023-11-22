import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Rating from './Rating';
import Svg, { Path } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/AppSlice';
const SearchResultComponent = ({
  image,
  name,
  rating,
  locationName,
  reviews,
  money,
  address,
  item,
  activeTab,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleNavigation = () => {
    navigation.navigate('SinglePage', { data: item, title: item.name ,activeTab:activeTab});
  };
  const favorites = useSelector((state) => state.Favorite.favorites);
  const isFavorite = (todoId) => {
    return favorites.some((item) => item.id === todoId);
  };

  const handleFavoriteToggle = (item) => {
    if (isFavorite(item.id)) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item));
    }
  };
  return (
    <View>
      <View style={styles.rounded}>
        <Svg
          style={[
            styles.like,
            { fill: isFavorite(item.id) ? 'red' : 'none' },
            { stroke: isFavorite(item.id) ? 'transparent' : 'gray' },
          ]}
          width={30}
          height={30}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          onPress={() => handleFavoriteToggle(item)}
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </Svg>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.container, { padding: 0 }]}
        onPress={handleNavigation}
      >
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: 300 }}
          />
          <View
            style={{
              paddingTop: 10,
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ width: '70%' }}>
                <Text
                  style={[
                    styles.scale,
                    styles.name,
                    { justifyContent: 'flex-start' },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {name}
                </Text>
                <View style={styles.ratingContainer}>
                  {<Rating rating={rating} />}
                  <Text
                    style={[styles.reviews, { justifyContent: 'flex-start' }]}
                  >
                    {reviews} review
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.textButton}>View Deal</Text>
              </TouchableOpacity>
            </View>
            {money && (
              <Text style={[styles.scale, { fontWeight: '600' }]}>{money}</Text>
            )}
            <Text
              style={[styles.scale, { alignItems: 'flex-start' }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {locationName && locationName}
              {address && address}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingVertical: 20,
    paddingHorizontal: 0,
    color: 'white',
    borderBottomColor: '#5A5A5A',
    borderBottomWidth: 1,
  },
  itemContainer: {
    flex: 1,
    margin: 0,
    color: 'white',
    paddingBottom: 20,
  },
  scale: {
    padding: 2,
    marginVertical: 1,
    color: 'white',
    alignItems: 'center',
  },
  reviews: {
    color: 'white',
    marginLeft: 10,
    textAlign: 'left',
  },
  name: {
    fontWeight: '700',
    fontSize: 17,
    color: 'white',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginRight: 5,
    borderColor: '#85E8B5',
    borderWidth: 1,
  },
  coloredCircle: {
    backgroundColor: '#00AA6C',
  },
  halfColoredCircle: {
    width: '50%',
    height: '100%',
    borderBottomLeftRadius: 7.5,
    borderTopLeftRadius: 7.5,
    backgroundColor: '#00AA6C',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 1,
  },
  button: {
    backgroundColor: '#FBC661',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 0,
    borderRadius: 23,
  },
  textButton: { fontWeight: 'bold' },
  rounded: {
    backgroundColor: 'white',
    borderRadius: 22.5,
    width: 45,
    height: 45,
    position: 'absolute',
    right: 15,
    top: 35,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {},
});
export default SearchResultComponent;
