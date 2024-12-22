import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import BasicAnimation from './screens/BasicAnimation';
import Interpolation from './screens/Interpolation';

export type RootNavigatorParamList = {
  Home: undefined;
  BasicAnimation: undefined;
  Interpolation: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
      <Stack.Screen name="Interpolation" component={Interpolation} />
    </Stack.Navigator>
  );
}
