import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Addvertise = ({ img, text, header }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.container} source={img}>
      <View style={styles.box}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>{header}</Text>

          <Text style={styles.description}>{text} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Article')}
          >
            <Text style={styles.buttonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginTop: 50,
    height: 500,
    resizeMode: 'cover',
  },
  box: {
    flex: 1,
    position: 'absolute',
    left: 0,
    padding: 10,
    width: '100%',
    textAlign: 'left',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    padding: 10,
    paddingBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    lineHeight: 50,
  },
  description: {
    color: 'white',
    marginRight: 30,
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
    // right: '50%',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Addvertise;
