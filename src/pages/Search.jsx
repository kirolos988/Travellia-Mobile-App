import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatButton from '../components/catButton';

const Search = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
        <CatButton />
      </View>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#181818',
    flex: 1,
  },
});
