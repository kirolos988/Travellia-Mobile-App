import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchResultComponent from '../components/SearchResult/SearchResultComponent';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchResultComponent />
    </SafeAreaView>
  );
};

export default Home;