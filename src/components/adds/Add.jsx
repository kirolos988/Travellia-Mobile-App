import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Add = ({ title, buttonText, onPress }) => {
  return (
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ImageBackground
        source={require('./assets/Rome.jpeg')}
        style={styles.container}
      >
        <View style={styles.box}>
          <View style={styles.overlay}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    position: 'relative',
    marginBottom: 10,
    textAlign: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  box: {
    flex: 1,
    position: 'absolute',
    left: 0,
    width: '100%',
    textAlign: 'left',
    height: 170,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    paddingBottom: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 'auto',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Add;
