import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import React from 'react';

const CatButton = () => {
  const [activeTab, setActiveTab] = useState(1);
  // const [input, setInput] = useState('')
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
          style={styles.ButtonStyle}
          onPress={() => setActiveTab(1)}
        >
          <Text style={styles.TextButton}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => setActiveTab(2)}
        >
          <Text style={styles.TextButton}>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => setActiveTab(3)}
        >
          <Text style={styles.TextButton}>Things To Do</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.SearchInput}
          placeholder={placeholder[activeTab]}
          placeholderTextColor={'grey'}
        />
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
    outlineWidth: 0,
  },
});

export default CatButton;
