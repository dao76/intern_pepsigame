import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserConTextProvider } from './src/screens/user/UserContext'
import AppNavigation from './src/navigation/Navigation'

const App = () => {
  return (
    <UserConTextProvider>
      <AppNavigation />
    </UserConTextProvider>
  );
}
export default App


