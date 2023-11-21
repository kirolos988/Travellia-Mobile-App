import { Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../store/AxiosUrl';
import { SafeAreaView } from 'react-native-safe-area-context';
import RandomCategoryComponent from '../RandomCategoryComponents';

const RandomCardComponent = ({ category, categoryName }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axiosInstance.get(`/${category}`);
        const dataa =
          responseData.data.hotels ||
          responseData.data.restaurants ||
          responseData.data.todos;
        const randomCategory = getRandomCards(dataa, 20);
        console.log(randomCategory);
        setData(randomCategory);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRandomCards = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };

  return (
    <SafeAreaView>
      <Text style={styles.heading}>Worldwide Top Rated {categoryName}</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : data.length > 0 ? (
        <FlatList
          horizontal
          snapToInterval={70}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={data}
          renderItem={({ item }) => (
            <RandomCategoryComponent
              data={item}
              image={item.images[0]}
              name={item.name}
              rating={item.rating}
              locationName={item.location.locationName}
              reviews={item.reviews}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No hotels available</Text>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 40,
    marginHorizontal: 15,
  },
});
export default RandomCardComponent;
