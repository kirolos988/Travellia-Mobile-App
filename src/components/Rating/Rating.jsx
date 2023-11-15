import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const Rating = ({ rating }) => {
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

  return coloredCircles;
};

const styles = StyleSheet.create({
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
  }
});

export default Rating;
