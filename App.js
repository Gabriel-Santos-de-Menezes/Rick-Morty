import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from './src/routes'

import Header from './src/components/Header'
import Landing from './src/pages/Landing'

export default function App() {
  return (
    <View style={styles.container}>
      <Route />
    </View>
    );
  }
  
  {/* <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
  </View> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },
});
