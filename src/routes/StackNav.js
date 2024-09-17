import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteName} from '../config';
import {HomePage, SecondPage, ThirdPage} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
      initialRouteName={RouteName.TABNAV}
     >
      <Stack.Screen name={RouteName.HOMEPAGE} component={HomePage}  />
      <Stack.Screen name={RouteName.SECONDPAGE} component={SecondPage} />
      <Stack.Screen name={RouteName.THIRDPAGE} component={ThirdPage} />
      <Stack.Screen name={RouteName.TABNAV} component={TabNav} />
    </Stack.Navigator>
  );
};
export default StackNav;
