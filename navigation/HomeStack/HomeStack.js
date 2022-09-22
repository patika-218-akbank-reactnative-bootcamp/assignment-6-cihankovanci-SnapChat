import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Sign from '../../Screens/Sign';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Sign" component={Sign}/>
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
    
  );
}

export default HomeStack

const styles = StyleSheet.create({})