import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: 'orange', flex: 1
    }}>
      <StatusBar barStyle='dark-content' />
      <View style={{
        backgroundColor: 'white'
      }}>
        <Text>DoTQ!!!</Text>
      </View>
    </SafeAreaView>
  );
}