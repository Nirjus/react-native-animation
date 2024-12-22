import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef} from 'react';

export default function BasicAnimation() {
  const fedRef = useRef(new Animated.Value(0)).current;
  const translateRef = useRef(new Animated.Value(0)).current;
  const scaleRef = useRef(new Animated.Value(1)).current;
  const rotateRef = useRef(new Animated.Value(1)).current;
  const springRef = useRef(new Animated.Value(0)).current;
  const bounceRef = useRef(new Animated.Value(0)).current;

  const handleFadeIN = () => {
    Animated.timing(fedRef, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleFadeOUT = () => {
    Animated.timing(fedRef, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleTranslate = () => {
    Animated.timing(translateRef, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };
  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleRef, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleRef, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const handleRotate = () => {
    Animated.timing(rotateRef, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateRef.setValue(0);
    });
  };
  const handleSpring = () => {
    Animated.spring(springRef, {
      toValue: 100,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start(() => {
      springRef.setValue(0);
    });
  };
  const handelBounce = () => {
    Animated.sequence([
      Animated.spring(bounceRef, {
        toValue: -60,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(bounceRef, {
        toValue: 0,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTxt}>Basic Animation Demo</Text>

      {/* Fade in animation demo */}
      <Text style={styles.subTxt}>Fade in fade Demo</Text>

      <View style={styles.demoContain}>
        <Animated.View style={[styles.box, styles.fedBox, {opacity: fedRef}]} />
        <View style={styles.btnContainer}>
          <Button onPress={handleFadeIN} title="Fade in" />
          <Button onPress={handleFadeOUT} title="Fade out" />
        </View>
      </View>

      {/* translate animation demo */}
      <Text style={styles.subTxt}>Translation animation Demo</Text>
      <View style={styles.demoContain}>
        <Animated.View
          style={[
            styles.box,
            styles.translateBox,
            {
              transform: [
                {
                  translateX: translateRef,
                },
              ],
            },
          ]}>
          <View />
        </Animated.View>
        <Button title="translateX" onPress={handleTranslate} />
      </View>

      {/* Scale Animation */}
      <Text style={styles.subTxt}>Scale Animation</Text>
      <View style={styles.demoContain}>
        <Animated.View
          style={[
            styles.box,
            styles.scaleBox,
            {transform: [{scale: scaleRef}]},
          ]}></Animated.View>
        <Button title="Scale it" onPress={handleScale} />
      </View>

      {/* Rotate Animation */}
      <Text style={styles.subTxt}>Rotate Animation</Text>
      <View style={styles.demoContain}>
        <Animated.View
          style={[
            styles.box,
            styles.rotateBox,
            {
              transform: [
                {
                  rotate: rotateRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
        <Button title="Rotate the box" onPress={handleRotate} />
      </View>
      {/* Spring Animation */}
      <Text style={styles.subTxt}>Spring Animation</Text>
      <View style={styles.demoContain}>
        <Animated.View
          style={[
            styles.box,
            styles.springBox,
            {
              transform: [
                {
                  translateX: springRef,
                },
              ],
            },
          ]}
        />
        <Button title="Spring Animation box" onPress={handleSpring} />
      </View>

      {/* Bounce Animation */}
      <Text style={styles.subTxt}>Bounce Animation</Text>
      <View style={styles.demoContain}>
        <Animated.View
          style={[
            styles.box,
            styles.bounceBox,
            {
              transform: [
                {
                  translateY: bounceRef,
                },
              ],
            },
          ]}
        />
        <Button title="Bounce the box" onPress={handelBounce} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTxt: {
    fontSize: 18,
    fontWeight: 'medium',
  },
  demoContain: {
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
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
  fedBox: {
    backgroundColor: '#3498db',
  },
  translateBox: {
    backgroundColor: '#38f038',
  },
  scaleBox: {
    backgroundColor: '#fa6327',
  },
  rotateBox: {
    backgroundColor: '#e6bd08',
  },
  springBox: {
    backgroundColor: '#f1309b',
  },
  bounceBox: {
    backgroundColor: '#04eebb',
  },
});
