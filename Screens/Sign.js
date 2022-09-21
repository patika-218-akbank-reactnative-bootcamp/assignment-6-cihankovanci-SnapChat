import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, {useState} from 'react';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInForm } from '../utils/store';


const SignUp = () => {

  const {email, password} = useSelector((state) => state.auth.signInForm);
  
  const dispatch = useDispatch();




  const handleSignUp = () =>{
    createUserWithEmailAndPassword(auth, email, password).then(response=>{

    });
  };
  
  return (
    <View>
      <Text>Sign-Up</Text>
      <TextInput
      style={{backgroundColor: "rgba(0,0,0,0.1)", padding: 8, width: 200}}
      value={email}
      onChangeText={ (text) => {
       dispatch(setSignInForm({email: text}))
      }} />
      <TextInput
      style={{backgroundColor: "rgba(0,0,0,0.1)", padding: 8, width: 200}}
      value={password}
      onChangeText={(text) => {
        dispatch(setSignInForm({password: text}))
      }} />
      <Pressable onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({})