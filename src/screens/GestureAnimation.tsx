import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef} from 'react';

export default function GestureAnimation() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Gesture Animation</Text>
      <Text style={styles.headerTxt}>Drag the Box</Text>

      <Animated.View
        style={[styles.box, pan.getLayout()]}
        {...panResponder.panHandlers}>
        <Text style={styles.btnText}>Drag me</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    backgroundColor: 'lime',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  btnText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
