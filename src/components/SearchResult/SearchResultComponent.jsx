import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const SearchResultComponent = ({
  image,
  name,
  rating,
  locationName,
  reviews,
}) => {
  const [coloredCircles, setColoredCircles] = useState([]);
  useEffect(() => {
    const fullCirclesCount = Math.floor(rating);
    const hasHalfCircle = rating % 1 !== 0;

    const circles = new Array(5).fill(false).map((_, index) => {
      if (index < fullCirclesCount) {
        return (
          <View
            key={index}
            style={[styles.circle, styles.coloredCircle]}
          ></View>
        );
      } else if (index === fullCirclesCount && hasHalfCircle) {
        return (
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 7.5,
              borderColor: '#00AA6C',
              borderWidth: 1,
              marginRight: 5,
            }}
          >
            <View key={index} style={[styles.halfColoredCircle]}></View>
          </View>
        );
      } else {
        return <View key={index} style={styles.circle}></View>;
      }
    });

    setColoredCircles(circles);
  }, [rating]);

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
          <Text>{coloredCircles}</Text>
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
  },
  reviews: {
    color: 'white',
    marginLeft: 10,
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
    backgroundColor: 'transparent',
    marginRight: 5,
    borderColor: '#00AA6C',
    borderWidth: 1,
  },
  coloredCircle: {
    backgroundColor: '#00AA6C',
  },
  halfColoredCircle: {
    width: 7,
    height: 13,
    borderBottomLeftRadius: 7.5,
    borderTopLeftRadius: 7.5,
    backgroundColor: '#00AA6C',
    borderColor: '#00AA6C',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
});

export default SearchResultComponent;
