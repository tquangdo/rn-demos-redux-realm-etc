import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import TaskManagerComponent from './components/TaskManagerComponent';
import storeJS from './store_reduxdemo';

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
