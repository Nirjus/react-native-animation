/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/root-navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
