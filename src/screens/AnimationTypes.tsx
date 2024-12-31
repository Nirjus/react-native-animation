import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimationTypes: React.FC = () => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          scale: scale.value,
        },
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  // timing animation
  const handleTimingAnimation = () => {
    translateX.value = withTiming(150, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
  };
  // reset animation
  const handlResetAnimation = () => {
    translateX.value = withTiming(0);
    scale.value = withTiming(1);
    rotate.value = withTiming(0);
  };
  // spring animation
  const handleSpringAnimation = () => {
    scale.value = withSpring(1.5, {
      damping: 10,
      stiffness: 100,
    });
  };
  const handleDecayAnimation = () => {
    translateX.value = withDecay({
      velocity: 200,
      clamp: [0, 200],
    });
  };
  // handleSequence
  const handleSequenceAnimation = () => {
    rotate.value = withSequence(
      withTiming(360, {duration: 1000}),
      withTiming(0, {duration: 1000}),
    );
  };
  // delay animation
  const handleDelayAnimation = () => {
    translateX.value = withDelay(1000, withSpring(200));
  };
  //repet animation
  const handelrepetAnimation = () => {
    scale.value = withRepeat(withTiming(1.5, {duration: 500}), 6, true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Animation Types</Text>
      <Animated.View style={[styles.box, boxStyle]}>
        <Text style={styles.btnTxt}>Wassp</Text>
      </Animated.View>

      <View style={styles.btnConatiner}>
        <Pressable style={styles.btn} onPress={handleTimingAnimation}>
          <Text style={styles.btnTxt}>Timing</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSpringAnimation}>
          <Text style={styles.btnTxt}>Spring</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDecayAnimation}>
          <Text style={styles.btnTxt}>Decay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSequenceAnimation}>
          <Text style={styles.btnTxt}>Sequence</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handelrepetAnimation}>
          <Text style={styles.btnTxt}>Repeat</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDelayAnimation}>
          <Text style={styles.btnTxt}>Delay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handlResetAnimation}>
          <Text style={styles.btnTxt}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AnimationTypes;

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
    backgroundColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  btnConatiner: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
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
});
