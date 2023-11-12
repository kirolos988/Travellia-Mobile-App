import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { hotelsAxios } from '../../store/AxiosUrl';

const SearchRsultComponent = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const data = await hotelsAxios();
          console.log(data)
          setHotels(data);
        } catch (error) {
          console.log(error)
          throw error
        }
      }
      fetchHotels()
    }, []);
  return (
    <View>
     {hotels && hotels.map((hotel)=>(
        <View>
            <Text>{hotel.id}</Text>
            <Text>{hotel.name}</Text>
        </View>
     ))}
    </View>
  )
}

export default SearchRsultComponent