import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { hotelsAxios } from '../../store/AxiosUrl';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await hotelsAxios();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchData();
  }, []);
  StatusBar.setBackgroundColor('#181818');
  StatusBar.setBarStyle('white');
  const data = [
    { city: 'cairo', address: 'Cairo Governorate, Egypt' },
    { city: 'Rome', address: 'Lazio, Italy' },
    { city: 'Dubai', address: 'Emirate of Dubai, United Arab Emirates' },
    { city: 'Lebanon', address: 'Middle East' },
    { city: 'Greece', address: 'Europe' },
  ];
  const navigation = useNavigation()
  const handleNavigation =()=>{
    navigation.navigate("SearchedHotels",{})
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>POPULAR DISTINATIONS</Text>
      {data.map((item) => (
        <TouchableOpacity style={styles.box} activeOpacity={0.7} >
          <View style={styles.leftSide}>
            <Ionicons name="location-outline" size={30} color="white" />
          </View>
          <View style={styles.cityContainer}>
            <Text style={styles.CityName}>{item.city}</Text>
            <Text style={styles.cityAddress}>{item.address}</Text>
          </View>
        </TouchableOpacity>
      ))}


      {/* <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SearchResultComponent
            image={item.images[0]}
            name={item.name}
            rating={item.rating}
            locationName={item.location.locationName}
            reviews={item.reviews}
            money={item.money}
          />
        )}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181718',
    paddingVertical: 20,
  },
  header: { fontWeight: 'bold', color: 'white', padding: 10, fontSize: 18,marginBottom:20 },
  box: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 10,
    alignItems:"center"

  },
  leftSide: {
    backgroundColor: '#242224',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderRadius: 9,
  },
  cityContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  CityName: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '600',
  },
  cityAddress: {
    color: 'gray',
  },
});

export default Hotels;
