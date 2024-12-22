import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import React, {useRef} from 'react';

export default function Interpolation() {
  const animated = useRef(new Animated.Value(0)).current;

  const handleStartAnimation = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start(() => {
      animated.setValue(0);
    });
  };
  const backgroundColor = animated.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#f05885', '#b554ec', '#27db5d'],
  });
  const rotate = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const borderRadius = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const size = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200],
  });
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Interpolation</Text>

      <Animated.View
        style={[
          styles.box,
          {
            backgroundColor,
            borderRadius,
            width: size,
            height: size,
            transform: [{rotate}],
          },
        ]}>
        <Text style={styles.btnText}>Interpolate me!</Text>
      </Animated.View>
      <Button title="Start Animation here" onPress={handleStartAnimation} />
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
});
