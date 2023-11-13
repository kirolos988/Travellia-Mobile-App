import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RandomHotelsComponent = ({
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

    const circles = new Array(5).fill(null).map((_, index) => {
      if (index < fullCirclesCount) {
        return (
          <View key={index} style={[styles.circle, styles.coloredCircle]} />
        );
      } else if (index === fullCirclesCount && hasHalfCircle) {
        return (
          <View key={index} style={styles.circle}>
            <View style={styles.halfColoredCircle} />
          </View>
        );
      } else {
        return <View key={index} style={styles.circle} />;
      }
    });

    setColoredCircles(circles);
  }, [rating]);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: image }} style={{ width: '100%', height: 300, borderRadius: 7 }} />
        <Text style={[styles.scale, styles.name]} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          {coloredCircles}
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
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginRight: 5,
    borderColor: '#85E8B5',
    borderWidth: 1,
  },
  coloredCircle: {
    backgroundColor: '#85E8B5',
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
  },
});

export default RandomHotelsComponent;
