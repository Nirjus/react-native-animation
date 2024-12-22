import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigatorParamList} from '../root-navigation';

type HomeScreenNavigationProps = StackNavigationProp<
  RootNavigatorParamList,
  'Home'
>;
type Props = {
  navigation: HomeScreenNavigationProps;
};
export default function Home({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? '#acacac' : 'gray',
          },
        ]}
        onPress={() => navigation.navigate('BasicAnimation')}>
        <Text style={styles.btnTxt}>Visit Animation screeen</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? '#acacac' : 'gray',
          },
        ]}
        onPress={() => navigation.navigate('Interpolation')}>
        <Text style={styles.btnTxt}>Interpollation screeen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  btn: {
    padding: 15,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 5,
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16,
  },
});
