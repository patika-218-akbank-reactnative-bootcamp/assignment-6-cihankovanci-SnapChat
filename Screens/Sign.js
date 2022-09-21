import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInForm } from '../utils/store';
import { useNavigation } from '@react-navigation/native';


const Sign = () => {

  const {email, password} = useSelector((state) => state.auth.signInForm);
  
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  }, [])




  const handleSignUp = () =>{
    createUserWithEmailAndPassword(auth, email, password).then(response=>{

    });
  };

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      const user = userCredential.user;
      console.log('logged in with:', user.email)
      navigation.navigate("Home")
    })
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Giriş</Text>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={ (text) => {
        dispatch(setSignInForm({email: text}))
        }} />
        <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => {
          dispatch(setSignInForm({password: text}))
        }} 
        secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn} style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Sign;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    width: '80%'
  },
  input:{
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    
  },
  buttonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button:{
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline:{
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonOutlineText:{
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  }
})