import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';
import {
  citiesAxios,
  hotelsAxios,
  restaurantsAxios,
  todoAxios,
} from '../../store/AxiosUrl';
import { useNavigation } from '@react-navigation/native';

const CatButton = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [inputVal, setInputVal] = useState('');
  const [category, setCategory] = useState('');
  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [todos, setTodos] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    switch (activeTab) {
      case 1:
        setCategory('Hotels');
        break;
      case 2:
        setCategory('Restaurants');
        break;
      case 3:
        setCategory('ThingsToDo');
        break;
      default:
        setCategory('Hotels');
        break;
    }
  }, [activeTab]);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesData = await citiesAxios();
        setCities(citiesData);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchhotels = async () => {
      try {
        const hotelsData = await hotelsAxios();
        setHotels(hotelsData);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRestaurants = async () => {
      try {
        const restaurantsData = await restaurantsAxios();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTodos = async () => {
      try {
        const todosData = await todoAxios();
        setTodos(todosData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCities();
    fetchTodos();
    fetchhotels();
    fetchRestaurants();
  }, []);
  const cityNames = cities.map((city) => city.name.toLowerCase());
  const hotelNames = hotels.map((hotel) => hotel.name.toLowerCase());
  const todoNames = todos.map((todo) => todo.name.toLowerCase());
  const restaurantNames = restaurants.map((restaurant) =>
    restaurant.name.toLowerCase(),
  );
  console.log(todoNames);
  
  const searchValidate = () => {
    if (inputVal.trim() === '') {
      return;
    }
    const matchedCity = cityNames.find((city) =>
      city.includes(inputVal.toLowerCase()),
    );
    console.log(matchedCity);

    const matchedHotels = hotelNames.filter((hotel) =>
      hotel.includes(inputVal.toLowerCase()),
    );

    const matchedRestaurants = restaurantNames.filter((restaurant) =>
      restaurant.includes(inputVal.toLowerCase()),
    );
    const matchedTodos = todoNames.filter((todo) =>
      todo.includes(inputVal.toLowerCase()),
    );

    if (matchedCity) {
      const matchedCityObject = cities.find((city) =>
        city.name.toLowerCase().includes(matchedCity.toLowerCase()),
      );
      console.log(matchedCityObject);
      if (category === 'Hotels') {
        const hotelsInCity = hotels.filter(
          (hotel) => hotel.country_id === matchedCityObject.id,
        );
        navigation.navigate('SearchedHotels', { hotels: hotelsInCity });
      } else if (category === 'Restaurants') {
        const restaurantsInCity = restaurants.filter(
          (restaurant) => restaurant.country_id === matchedCityObject.id,
        );
        console.log(restaurantsInCity);
        navigation.navigate('SearchedHotels', {
          restaurants: restaurantsInCity,
        });
      } else if (category === 'ThingsToDo') {
        const todosInCity = todos.filter(
          (todo) => todo.country_id === matchedCityObject.id,
        );
        console.log(todosInCity);
        navigation.navigate('SearchedHotels', { todos: todosInCity });
      }
    }
  };
  const handleInputChange = (text) => {
    setInputVal(text);
  };

  const placeholder = {
    1: "Enter hotel's name ...",
    2: "Enter restaurant's name ...",
    3: 'Enter the thing you wish to do ...',
  };
  return (
    <View style={styles.GeneralView}>
      <View style={styles.SearchView}>
        <Text style={styles.SearchText}>Search</Text>
      </View>
      <View style={styles.ButtonView}>
        <TouchableOpacity
          style={[styles.ButtonStyle, activeTab === 1 ? styles.active : null]}
          onPress={() => setActiveTab(1)}
        >
          <Text
            style={[
              styles.TextButton,
              activeTab === 1 ? styles.activeText : null,
            ]}
          >
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ButtonStyle, activeTab === 2 ? styles.active : null]}
          onPress={() => setActiveTab(2)}
        >
          <Text
            style={[
              styles.TextButton,
              activeTab === 2 ? styles.activeText : null,
            ]}
          >
            Restaurants
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ButtonStyle, activeTab === 3 ? styles.active : null]}
          onPress={() => setActiveTab(3)}
        >
          <Text
            style={[
              styles.TextButton,
              activeTab === 3 ? styles.activeText : null,
            ]}
          >
            Things To Do
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.SearchInput}
          placeholder={placeholder[activeTab]}
          placeholderTextColor={'grey'}
          value={inputVal}
          onChangeText={handleInputChange}
          returnKeyType="search"
          onSubmitEditing={searchValidate}
        />
        <TouchableOpacity onPress={searchValidate}>
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GeneralView: {
    paddingVertical: 15,
  },
  SearchView: {
    padding: 10,
    margin: 10,
  },
  SearchText: {
    justifyContent: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
  },
  ButtonView: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  ButtonStyle: {
    borderColor: '#fff',
    borderRadius: 40,
    borderWidth: 2,
    margin: 7,
    padding: 0,
    width: '32%',
    height: 50,
    justifyContent: 'center',
  },
  TextButton: {
    color: '#fff',
    margin: 0,
    padding: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  SearchInput: {
    alignSelf: 'center',
    width: '95%',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
    margin: 5,
    height: 50,
    marginTop: 0,
    borderRadius: 40,
    fontSize: 17,
    color: '#fff',
    // outlineWidth: 0,
  },
  active: {
    backgroundColor: '#85E8BF',
  },
  activeText: {
    color: 'black',
    fontWeight: '700',
  },
});

export default CatButton;
