import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {validEmail, validPassword} from '../components/validaor';

const FromValidation = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const emailShake = useSharedValue(0);
  const passwordShake = useSharedValue(0);
  const emailCheck = useSharedValue(0);
  const passwordCheck = useSharedValue(0);
  const emailErrorHeight = useSharedValue(0);
  const passwordErrorHeight = useSharedValue(0);

  const handleEmailChange = (txt: string) => {
    setEmail(txt.trim());
    try {
      validEmail(txt);
      setEmailError('');
      emailCheck.value = withSpring(0);
      emailErrorHeight.value = withSpring(0);
    } catch (error: any) {
      setEmailError(error.message);
      emailCheck.value = withSpring(1);
      emailShake.value = withSequence(
        withTiming(-10, {duration: 50}),
        withTiming(10, {duration: 100}),
        withTiming(0, {duration: 50}),
      );
      emailErrorHeight.value = withSpring(20);
    }
  };
  const handlepasswordchange = (txt: string) => {
    setPassword(txt.trim());
    try {
      validPassword(txt);
      setPasswordError('');
      passwordCheck.value = withSpring(0);
      passwordErrorHeight.value = withSpring(0);
    } catch (error: any) {
      setPasswordError(error.message);
      passwordCheck.value = withSpring(1);
      passwordShake.value = withSequence(
        withTiming(-10, {duration: 50}),
        withTiming(10, {duration: 100}),
        withTiming(0, {duration: 50}),
      );
      passwordErrorHeight.value = withSpring(20);
    }
  };
  const emailAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: emailShake.value}],
    };
  });
  const passwordAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: passwordShake.value}],
    };
  });
  const emailCheckMarkStyle = useAnimatedStyle(() => {
    return {
      opacity: emailCheck.value,
      transform: [
        {scale: emailCheck.value},
        {rotate: `${emailCheck.value * 360}deg`},
      ],
    };
  });
  const passwordCheckMarkStyle = useAnimatedStyle(() => {
    return {
      opacity: passwordCheck.value,
      transform: [
        {scale: passwordCheck.value},
        {rotate: `${passwordCheck.value * 360}deg`},
      ],
    };
  });
  const emailErrorStyle = useAnimatedStyle(() => {
    return {
      height: emailErrorHeight.value,
      opacity: emailErrorHeight.value === 0 ? 0 : 1,
      transform: [{translateY: withSpring(emailErrorHeight.value / 2)}],
    };
  });
  const passwordErrorStyle = useAnimatedStyle(() => ({
    height: passwordErrorHeight.value,
    opacity: passwordErrorHeight.value === 0 ? 0 : 1,
    transform: [{translateY: withSpring(passwordErrorHeight.value / 2)}],
  }));
  const onSubmit = (email: string, password: string) => {
    console.log(email, password);
  };
  const handleFormSubmit = () => {
    if (emailError || passwordError || !email || !password) {
      return;
    }
    onSubmit(email, password); // api call or navigate the data
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputConatiner, emailAnimatedStyle]}>
        <TextInput
          style={styles.inputComp}
          placeholder="enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={'gray'}
          value={email}
          onChangeText={handleEmailChange}
        />
        <Animated.View style={[styles.checkMark, emailCheckMarkStyle]}>
          <Animated.Text style={styles.checkmarkTxt}>Check</Animated.Text>
        </Animated.View>
      </Animated.View>
      <Text style={[styles.errorTxt, emailErrorStyle]}>{emailError}</Text>
      <Animated.View style={[styles.inputConatiner, passwordAnimatedStyle]}>
        <TextInput
          style={styles.inputComp}
          placeholder="enter password"
          placeholderTextColor={'gray'}
          secureTextEntry
          value={password}
          onChangeText={handlepasswordchange}
        />
        <Animated.View style={[styles.checkMark, passwordCheckMarkStyle]}>
          <Text style={styles.checkmarkTxt}>Check</Text>
        </Animated.View>
      </Animated.View>
      <Animated.Text style={[styles.errorTxt, passwordErrorStyle]}>
        {passwordError}
      </Animated.Text>
      <Pressable style={[styles.submitBtn]} onPress={handleFormSubmit}>
        <Text style={styles.submitTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default FromValidation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    elevation: 5,
  },
  inputConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  inputComp: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
  },
  checkMark: {
    position: 'absolute',
    right: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkTxt: {
    color: '#1a9b1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorTxt: {
    color: 'red',
    fontWeight: 'semibold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitBtn: {
    height: 50,
    backgroundColor: '#6deea3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  submitTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
