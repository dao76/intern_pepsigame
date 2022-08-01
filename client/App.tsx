import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserConTextProvider } from './src/screens/user/UserContext'
import AppNavigation from './src/navigation/Navigation'
import { ProductContextProvider } from './src/screens/product/ProductConText';
import Mainplay from './src/screens/product/screens/Mainplay';
import Code_Scan from './src/screens/product/screens/Code_Scan';
import Nhanqua from './src/screens/product/screens/Nhanqua';
const App = () => {
  return (

    <UserConTextProvider>
      <ProductContextProvider>
        <AppNavigation />
      </ProductContextProvider>
    </UserConTextProvider>

    // <Nhanqua />

  );
}
export default App


