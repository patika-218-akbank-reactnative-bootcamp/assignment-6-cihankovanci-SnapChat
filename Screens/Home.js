import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import CustomButton from '../components/CustomButton.js/CustomButton';

const handleSelect = () =>{
   
  };

  const openCamera = () =>{
   
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

     
      <CustomButton title="Select from Library" onPress={handleSelect} />
      <CustomButton title="Open Camera" onPress={openCamera} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})