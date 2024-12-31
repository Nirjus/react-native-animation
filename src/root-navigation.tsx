import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import BasicAnimation from './screens/BasicAnimation';
import Interpolation from './screens/Interpolation';
import CombineAnimation from './screens/CombineAnimation';
import GestureAnimation from './screens/GestureAnimation';
import ReanimatedCore from './screens/reanimatedConsepts';
import AnimationTypes from './screens/AnimationTypes';
import Gesture from './screens/gestureHandler';
import FromValidation from './screens/FromValidation';

export type RootNavigatorParamList = {
  Home: undefined;
  BasicAnimation: undefined;
  Interpolation: undefined;
  CombineAnimation: undefined;
  GestureAnimation: undefined;
  ReanimatedCore: undefined;
  AnimationType: undefined;
  GestureHandler: undefined;
  FormValidation: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
      <Stack.Screen name="Interpolation" component={Interpolation} />
      <Stack.Screen name="CombineAnimation" component={CombineAnimation} />
      <Stack.Screen name="GestureAnimation" component={GestureAnimation} />
      <Stack.Screen name="ReanimatedCore" component={ReanimatedCore} />
      <Stack.Screen name="AnimationType" component={AnimationTypes} />
      <Stack.Screen name="GestureHandler" component={Gesture} />
      <Stack.Screen name="FormValidation" component={FromValidation} />
    </Stack.Navigator>
  );
}
