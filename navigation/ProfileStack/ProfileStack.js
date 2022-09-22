import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../../Screens/Profile/Profile';
import Theme from '../../Screens/Profile/Theme';
import EditProfile from '../../Screens/Profile/EditProfile';

const Stack = createNativeStackNavigator();



const ProfileStack = () => {
  return (
    
        <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        </Stack.Navigator>
    
  )
}

export default ProfileStack

const styles = StyleSheet.create({})