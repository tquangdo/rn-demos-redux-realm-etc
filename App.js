import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import ContactForm from './components/ContactForm';
import storeJS from './store';

export default function App() {
  return (
    <Provider store={storeJS}>
      <>
        <StatusBar style="dark" />
        <ContactForm />
      </>
    </Provider>
  );
}