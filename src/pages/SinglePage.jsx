import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Rating from '../components/Rating';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ReadMoreComponent from '../components/ReadMoreComponent';
import WebView from 'react-native-webview';
import { StatusBar, Platform } from 'react-native';

const SinglePage = () => {
  const categoryData = useRoute().params;
  const {
    images,
    name,
    rating,
    reviews,
    phone,
    website,
    rank,
    description,
    money,
    location,
  } = categoryData.data;
  const { locationName, locationAddress } = location || {};
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#181818');
      StatusBar.setBarStyle('light-content');
    } else {
      return;
    }
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerTitle:name,
      headerStyle: {
        backgroundColor: '#181818',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    });
  }, [categoryData, navigation]);

//linking phone number
  const handleCallPress = () => {
    const telLink = `tel:${phone}`;

    Linking.canOpenURL(telLink)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(telLink);
        } else {
          console.error('Phone number is not supported');
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

//slider images
  useEffect(() => {
    let interval = setInterval(() => {
      if (images.length > 1) {
        const nextIndex = (activeIndex + 1) % images.length;
        flatlistRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setActiveIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  //coloring system bar 
  StatusBar.setBackgroundColor('#181818');
  StatusBar.setBarStyle('white');

  return (
    <SafeAreaView
      style={{ backgroundColor: '#181818', flex: 1, position: 'relative' }}
    >
      <ScrollView>
        <FlatList
          style={{ flexGrow: 0 }}
          data={images}
          ref={flatlistRef}
          getItemLayout={getItemLayout}
          renderItem={({ item, index }) => (
            <View style={{ height: 300 }} key={index}>
              <Image
                source={{ uri: item }}
                style={{ flex: 1, width: screenWidth }}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          onScroll={handleScroll}
          pagingEnabled={true}
        />
        <View style={{ paddingHorizontal: 10, flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratingContainer}>
            {<Rating rating={rating} />}
            <Text style={styles.reviews}>{reviews} Reviews</Text>
          </View>

          <View>
            {website && (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Fontisto
                  name="world-o"
                  size={16}
                  color="white"
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    marginVertical: 8,
                    textDecorationLine: 'underline',
                    color: 'white',
                    fontSize: 16,
                  }}
                  onPress={() => Linking.openURL(`${website}`)}
                >
                  Visit website
                </Text>
              </View>
            )}
            {phone && (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather
                  name="phone"
                  size={16}
                  color="white"
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    marginVertical: 8,
                    color: 'white',
                    textDecorationLine: 'underline',
                    fontSize: 16,
                  }}
                  onPress={handleCallPress}
                >
                  {phone}
                </Text>
              </View>
            )}
            {rank && (
              <Text
                style={{
                  marginVertical: 8,
                  color: 'white',
                  textDecorationLine: 'underline',
                  fontSize: 16,
                }}
              >
                {rank}
              </Text>
            )}
            {description && <ReadMoreComponent text={description} />}
            {locationName && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Ionicons
                  name="location-outline"
                  size={16}
                  color="white"
                  style={{ marginRight: 5 }}
                />

                <Text style={styles.locationName}>{locationName}</Text>
              </View>
            )}
            {locationAddress && (
              <WebView
                source={{
                  html: `<iframe src="${locationAddress}" width="100%" height="100%"></iframe>`,
                }}
                style={{
                  width: '100%',
                  height: 300,
                  borderWidth: 1,
                  borderColor: 'black',
                  marginVertical: 20,
                }}
              />
            )}
          </View>
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
      <View style={styles.fixedButton}>
        <Text style={styles.fixedButtonText}>{money}</Text>
        <TouchableOpacity style={styles.Touchable} activeOpacity={0.8}>
          <Text style={{ fontWeight: 'bold' }}>Check availalbity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SinglePage;
const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  fixedButton: {
    height: 80,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#181818',
    zIndex: 10,
  },
  fixedButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Touchable: {
    backgroundColor: '#FBC661',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  website: {
    marginVertical: 10,
  },
  reviews: {
    color: 'white',
  },
  locationName: {
    color: 'white',
    marginVertical: 10,
    width: '95%',
  },
});
