import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import storeJS from './store'
import TaskManagerComponent from './components/TaskManagerComponent'

export default function App() {
  return (
    <Provider store={storeJS}>
      <>
        <StatusBar style="dark" />
        <TaskManagerComponent />
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
