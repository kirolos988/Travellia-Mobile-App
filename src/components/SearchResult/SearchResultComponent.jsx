import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { hotelsAxios } from '../../store/AxiosUrl';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchResultComponent = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await hotelsAxios();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : hotels ? (
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={hotels}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No response yet</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderColor: 'black',
    // borderLeftWidth: 1,
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    // height: 200,
  },
  itemContainer: {
    height: 100,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    margin: 10,
    borderColor: 'black',
    justifyContent: 'center',
  },
});
export default SearchResultComponent;