import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const SearchResultComponent = ({ image, name, rating, locationName }) => {
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
              borderWidth:1,
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
        <Text>{name}</Text>
        <View style={styles.ratingContainer}>{coloredCircles}</View>
        <Text>{locationName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderColor: 'black',
  },
  itemContainer: {
    width: 270,
    borderRadius: 5,
    margin: 10,
    borderColor: 'black',
    justifyContent: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'white',
    marginRight: 5,
    borderColor: '#00AA6C',
    borderWidth: 1,
  },
  coloredCircle: {
    backgroundColor: '#00AA6C',
  },
  halfColoredCircle: {
    width: 7,
    height: 14,

    borderBottomLeftRadius: 7.5,
    borderTopLeftRadius: 7.5,
    backgroundColor: '#00AA6C',
    borderColor: '#00AA6C',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchResultComponent;
