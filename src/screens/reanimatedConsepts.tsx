import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function ReanimatedCore() {
  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const animatedRef = useAnimatedRef<Animated.View>();
  const opacity = useDerivedValue(() => {
    return Math.sin((rotation.value * Math.PI) / 180) / 2 + 0.5;
  });
  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
        {
          rotate: `${rotation.value} deg`,
        },
        {
          scale: scale.value,
        },
      ],
      opacity: opacity.value,
    };
  });
  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: 1 / scale.value,
        },
      ],
    };
  });
  const handleStartAnimation = () => {
    offset.value = withSpring(Math.random() * 200 - 100);

    rotation.value = withRepeat(
      withTiming(360, {duration: 2000, easing: Easing.linear}),
      -1,
      false,
    );

    scale.value = withRepeat(withTiming(1.5, {duration: 1000}), -1, true);
  };
  const handleStopAnimation = () => {
    cancelAnimation(offset);
    cancelAnimation(scale);
    cancelAnimation(rotation);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Reanimated Core</Text>

      <Animated.View style={[styles.box, boxStyle]} ref={animatedRef}>
        <Animated.Text style={[styles.boxTxt, textStyle]}>
          Animated Box
        </Animated.Text>
      </Animated.View>

      <View style={styles.btnConatiner}>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {backgroundColor: pressed ? 'lightgreen' : 'green'},
          ]}
          onPress={handleStartAnimation}>
          <Text style={styles.btnTxt}>Start Animation</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {backgroundColor: pressed ? 'lightgreen' : 'green'},
          ]}
          onPress={handleStopAnimation}>
          <Text style={styles.btnTxt}>Stop Animation</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  btnConatiner: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  btnTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'crimson',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
    borderRadius: 5,
  },
  boxTxt: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
