import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import React, {useRef} from 'react';

export default function CombineAnimation() {
  const moveAndRotate = useRef(new Animated.Value(0)).current;
  const pulseAnimated = useRef(new Animated.Value(1)).current;

  const combinedAnimation = () => {
    moveAndRotate.setValue(0);

    Animated.timing(moveAndRotate, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  const pulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimated, {
          toValue: 1.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimated, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  const moveX = moveAndRotate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const moveY = moveAndRotate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const rotate = moveAndRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const backgroundColor = moveAndRotate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['red', '#6b47eb', 'lime'],
  });
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>CombineAnimation</Text>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: moveX,
              },
              {
                translateY: moveY,
              },
              {
                rotate: rotate,
              },
              {
                scale: pulseAnimated,
              },
            ],
            backgroundColor,
          },
        ]}
      />
      <View style={styles.btnContainer}>
        <Button title="Move, rotate, color" onPress={combinedAnimation} />
        <Button title="Pulse Animation" onPress={pulseAnimation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
