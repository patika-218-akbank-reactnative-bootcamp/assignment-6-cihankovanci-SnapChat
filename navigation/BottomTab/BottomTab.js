import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStack/HomeStack';
import MapStack from '../MapStack/MapStack';
import ProfileStack from '../ProfileStack/ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}} />
            <Tab.Screen name="Maps" component={MapStack} options={{headerShown: false}} />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{headerShown: false}}
            />
        </Tab.Navigator>
        </NavigationContainer>
    
  )
}

export default BottomTab

const styles = StyleSheet.create({})