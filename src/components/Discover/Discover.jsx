import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Axios } from '../../store/AxiosUrl';
import { useNavigation } from '@react-navigation/native';

const Discover = () => {
    const[randomCity, setRandomCity] = useState()
    const[randomCategory, setRandomCategory] = useState()
    const cities = ["Cairo", "Dubai", "Rome", "Greece", "Lebanon"]
    const categories = ["Hotels", "Restaurants", "ThingsToDo"]
    const navigation = useNavigation();

    useEffect(()=>{
        const generateRandomCity = () => {  
            const randomNumber = Math.floor(Math.random() * 5); 
            const randomCityName = cities[randomNumber]
            setRandomCity(randomCityName); 
        }
        const generateRandomCategory = () => { 
            const randomNumber = Math.floor(Math.random() * 3); 
            const randomCategoryName = categories[randomNumber]
            setRandomCategory(randomCategoryName);  
        }
        generateRandomCity();
        generateRandomCategory();
    },[])
    
    const handleNavigation = async () => {
        const data = await Axios(randomCategory,randomCity);
        navigation.navigate('SearchedCategory', {
            category: data,
            discoverTitle: `"${randomCategory}" in ${randomCity}`,
        });
    };

  return (
    <View style={styles.boxView}>
      <Text style={styles.discoverText}>Discover more in {randomCity}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>handleNavigation()}>
        <Text style={styles.buttonText}>Keep exploring</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    boxView:{
        width: '85%',
        padding: 15,
        margin: 30,
        backgroundColor: '#1B4416',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,

    },
    discoverText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        padding: 15,
        margin: 0,
    },
    button: {
        borderColor: 'white',
        borderRadius:10,
        borderWidth: 2,
        margin: 0,
        padding: 10
    },
    buttonText: {
        color: 'white'
    },
})

export default Discover