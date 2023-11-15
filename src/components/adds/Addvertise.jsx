import { View, Text } from 'react-native';
import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const Addvertise = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/roadtrips.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>The Essential road-trip guide</Text>

        <Text style={styles.description}>
          Everything you need to pack up, drive.and enjoy the ride.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Read More')}
        >
          <Text style={styles.buttonText}>See More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width:"100%"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    position: 'absolute',
    top: '20%',
    left:0,
    padding: 10,
    width:"100%",
    textAlign:"left"
  },
  title: {
    color: 'white',
    fontSize: 40,
    // marginRight: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  description: {
    color: 'white',
    marginRight: 30,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 1,
    borderRadius: 50,
    width: 150,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 0,
    position: 'relative',
    top: 2,
    left: 100,
    // right: '50%',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Addvertise;
