import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import { ScrollView } from 'react-native-web';

const SinglePage = () => {
  const categoryData = useRoute().params;
  const { images, name, rating, reviews, phone, website } = categoryData.data;
  const flatlistRef = useRef();
  const [data, setData] = useState([]);
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  //Auto Scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === images.length - 1) {
        flatlistRef.current.scrollToIndex({ index: 0, animation: true });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log({ scrollPosition });
    const index = scrollPosition / screenWidth;
    // console.log({ index });
    setActiveIndex(index);
  };
  // const renderDotIndicators = () => {
  //   return item.data.images.map((dot, index) => {
  //     if (activeIndex === index) {
  //       return (
  //         <View
  //           key={index}
  //           style={{
  //             backgroundColor: 'yellow',
  //             width: 10,
  //             height: 10,
  //             borderRadius: 5,
  //             marginHorizontal: 6,
  //           }}
  //         ></View>
  //       );
  //     } else {
  //       return (
  //         <View
  //           key={index}
  //           style={{
  //             backgroundColor: 'white',
  //             width: 10,
  //             height: 10,
  //             borderRadius: 5,
  //             marginHorizontal: 6,
  //           }}
  //         ></View>
  //       );
  //     }
  //   });
  // };
  return (
    <ScrollView style={{ backgroundColor: 'black ', flex: 1 }}>
      <FlatList
        data={images}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={({ item }) => (
          <View style={{ height: 300 }}>
            <Image source={item} style={{ flex: 1, width: screenWidth }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        onScroll={handleScroll}
        pagingEnabled={true}
      />
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        {renderDotIndicators()}
      </View> */}
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
        <Text> {rating}</Text>

        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL({ website })}
          >
            Visit website
          </Text>
          <Text
            style={{ marginHorizontal: 10, textDecorationLine: 'underline' }}
          >
            {phone && phone}
          </Text>
          <Text style={{ textDecorationLine: 'underline' }}>
            Write a reviews
          </Text>
        </View>
      </View>

      <View style={styles.fixedButton}>
        <Text style={styles.fixedButtonText}>Fixed Button</Text>
      </View>
    </ScrollView>
  );
};

export default SinglePage;
const styles = StyleSheet.create({
  // fixedButton: {
  //     position: 'absolute',
  //     bottom: 0,
  //     width: '100%',
  //     height: 50,
  //     backgroundColor: '#0000FF',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   fixedButtonText: {
  //     color: '#FFFFFF',
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //   },
});
