import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';
import { Axios } from '../store/AxiosUrl';
import { useNavigation } from '@react-navigation/native';

const CategoryButton = () => {
  const [activeTab, setActiveTab] = useState('Hotels');
  const [inputVal, setInputVal] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  const fetchData = async () => {
    try {
      const data = await Axios(activeTab, inputVal);
      console.log(data);
      setData(data);
      if (data.length > 0) {
        navigation.navigate('SearchedCategory', {
          category: data,
          title: `"${inputVal}" ${activeTab} `,
          specifiedTitle: `${inputVal}`,
        });
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    switch (activeTab) {
      case 'Hotels':
        setCategory('Hotels');
        break;
      case 'Restaurants':
        setCategory('Restaurants');
        break;
      case 'ThingsToDo':
        setCategory('ThingsToDo');
        break;
      default:
        setCategory('Hotels');
        break;
    }
  }, [activeTab]);

  const searchValidate = () => {
    if (inputVal.trim() !== '') {
      fetchData();
    }
  };

  const handleInputChange = (text) => {
    setInputVal(capitalizeFirstLetter(text));
  };

  const placeholder = {
    Hotels: "Enter hotel's name ...",
    Restaurants: "Enter restaurant's name ...",
    ThingsToDo: 'Enter the thing you wish to do ...',
  };
  return (
    <View style={styles.GeneralView}>
      <View style={styles.SearchView}>
        <Text style={styles.SearchText}>Search</Text>
      </View>
      <View style={styles.ButtonView}>
        <TouchableOpacity
          style={[
            styles.ButtonStyle,
            activeTab === 'Hotels' ? styles.active : null,
          ]}
          onPress={() => setActiveTab('Hotels')}
        >
          <Text
            style={[
              styles.TextButton,
              activeTab === 'Hotels' ? styles.activeText : null,
            ]}
          >
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ButtonStyle,
            activeTab === 'Restaurants' ? styles.active : null,
          ]}
          onPress={() => setActiveTab('Restaurants')}
        >
          <Text
            style={[
              styles.TextButton,
              activeTab === 'Restaurants' ? styles.activeText : null,
            ]}
          >
            Restaurants
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ButtonStyle,
            activeTab === 'ThingsToDo' ? styles.active : null,
          ]}
          onPress={() => setActiveTab('ThingsToDo')}
        >
          <Text
            style={[
              styles.TextButton,
              activeTab === 'ThingsToDo' ? styles.activeText : null,
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
          enterKeyHint="search"
          onSubmitEditing={searchValidate}
        />
  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GeneralView: {
    paddingVertical: 15,
    paddingHorizontal: 10,
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
    marginVertical: 10,
  },
  ButtonStyle: {
    borderColor: '#fff',
    borderRadius: 40,
    borderWidth: 2,
    margin: 3,
    padding: 0,
    width: '32%',
    height: 50,
    justifyContent: 'center',
  },
  TextButton: {
    color: '#fff',
    margin: 0,
    paddingHorizontal: 3,
    textAlign: 'center',
    fontSize: 15,
  },
  SearchInput: {
    alignSelf: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
    margin: 5,
    height: 50,
    marginTop: 0,
    borderRadius: 40,
    fontSize: 17,
    color: '#fff',
  },
  active: {
    backgroundColor: '#85E8BF',
  },
  activeText: {
    color: 'black',
    fontWeight: '700',
  },
});

export default CategoryButton;
