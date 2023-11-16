import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Rating from '../Rating/Rating';

const RandomHotelsComponent = ({
  image,
  name,
  rating,
  locationName,
  reviews,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 300, borderRadius: 7 }}
        />
        <Text
          style={[styles.scale, styles.name]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          {<Rating rating={rating} />}
          <Text style={styles.reviews}>{reviews} review</Text>
        </View>
        <Text style={styles.scale} numberOfLines={1} ellipsizeMode="tail">
          {locationName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderColor: 'black',
    color: 'white',
  },
  itemContainer: {
    width: 290,
    borderRadius: 5,
    margin: 0,
    borderColor: 'black',
    justifyContent: 'center',
    color: 'white',
  },
  scale: {
    padding: 3,
    marginVertical: 3,
    color: 'white',
    marginHorizontal: 5,
  },
  reviews: {
    color: 'white',
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
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
    borderColor: '#00AA6C',
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
    paddingHorizontal: 7,
  },
});

export default RandomHotelsComponent;
