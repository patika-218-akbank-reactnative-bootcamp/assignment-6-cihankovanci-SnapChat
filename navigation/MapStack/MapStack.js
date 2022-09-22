import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Map from '../../Screens/Map/Map';
import ImageDetail from '../../Screens/Map/ImageDetail';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="ImageDetail" component={ImageDetail} />

      
    </Stack.Navigator>
    
  );
}

export default LoginStack

const styles = StyleSheet.create({})