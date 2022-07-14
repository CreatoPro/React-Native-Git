import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Routes from './src/navigation/routes';


export default function App() {



  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
