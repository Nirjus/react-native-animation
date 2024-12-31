import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type ContextType = {
  startX: number;
  startY: number;
};
const Gesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGesturehamdler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.startX;
      translateY.value = event.translationX + context.startY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Gesture handler</Text>
        <Text>Drag the below box and relese it</Text>
        <PanGestureHandler onGestureEvent={panGesturehamdler}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text style={styles.dragBox}>😁</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default Gesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  dragBox: {
    fontSize: 30,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    backgroundColor: 'crimson',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
