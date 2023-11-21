import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Axios } from '../store/AxiosUrl';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform } from 'react-native';
const Hotels = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#181818');
      StatusBar.setBarStyle('light-content');
    } else {
      return;
    }
  }, []);
  const data = [
    { city: 'Cairo', address: 'Cairo Governorate, Egypt' },
    { city: 'Rome', address: 'Lazio, Italy' },
    { city: 'Dubai', address: 'Emirate of Dubai, United Arab Emirates' },
    { city: 'Lebanon', address: 'Middle East' },
    { city: 'Greece', address: 'Europe' },
  ];
  const navigation = useNavigation();
  const handleNavigation = async (city) => {
    const data = await Axios('Hotels', city);
    console.log(data);
    navigation.navigate('SearchStack', {
      screen: 'SearchedCategory',
      params: { category: data, title: `Hotels in ${city}` },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>POPULAR DISTINATIONS</Text>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.box}
          activeOpacity={0.7}
          onPress={() => handleNavigation(item.city)}
        >
          <View style={styles.leftSide}>
            <Ionicons name="location-outline" size={30} color="white" />
          </View>
          <View style={styles.cityContainer}>
            <Text style={styles.CityName}>{item.city}</Text>
            <Text style={styles.cityAddress}>{item.address}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181718',
    paddingVertical: 20,
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  box: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 10,
    alignItems: 'center',
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
