import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Restaurant from './src/screens/Restaurant'
import Rest from './src/components/RestaurantCard'

export default function App() {
  return (
    <View style={styles.container}>
      <Restaurant></Restaurant>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
