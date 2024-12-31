import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
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
    <ScrollView style={{flex: 1}}>
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
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              backgroundColor: pressed ? '#acacac' : 'gray',
            },
          ]}
          onPress={() => navigation.navigate('CombineAnimation')}>
          <Text style={styles.btnTxt}>Combine animation screeen</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              backgroundColor: pressed ? '#acacac' : 'gray',
            },
          ]}
          onPress={() => navigation.navigate('GestureAnimation')}>
          <Text style={styles.btnTxt}>Gesture Animation screen</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              backgroundColor: pressed ? '#acacac' : 'gray',
            },
          ]}
          onPress={() => navigation.navigate('ReanimatedCore')}>
          <Text style={styles.btnTxt}>Reanimated screen</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              backgroundColor: pressed ? '#acacac' : 'gray',
            },
          ]}
          onPress={() => navigation.navigate('AnimationType')}>
          <Text style={styles.btnTxt}>Animation Types</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              backgroundColor: pressed ? '#acacac' : 'gray',
            },
          ]}
          onPress={() => navigation.navigate('GestureHandler')}>
          <Text style={styles.btnTxt}>Gesture</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.btn,
            {
              backgroundColor: pressed ? '#acacac' : 'gray',
            },
          ]}
          onPress={() => navigation.navigate('FormValidation')}>
          <Text style={styles.btnTxt}>Form Validation</Text>
        </Pressable>
      </View>
    </ScrollView>
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
