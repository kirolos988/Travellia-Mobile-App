import { View, Text } from 'react-native';
import React from 'react';
import { axiosInstance } from '../../store/AxiosUrl';
import { SafeAreaView } from 'react-native-safe-area-context';

const RandomCardComponent = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosInstance.get(`/${category}`);
        console.log(data);
        const randomCategory = getRandomCards(data, 20);
        setData(randomCategory);
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
            <RandomHotelsComponent
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

export default RandomCardComponent;
