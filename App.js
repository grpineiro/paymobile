import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Routes from './src/routes';
import globalStyle from './src/styles/global';

export default function App() {
  return (
    <View style={globalStyle.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}
