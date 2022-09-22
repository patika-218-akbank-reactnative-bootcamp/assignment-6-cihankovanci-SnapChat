import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Home from './Home'

const Send = ({ route, navigation }) => {

    const {imageurl, otherParam} = route.params;
  return (
    <View>
        <Text>adawd{otherParam}</Text>
      
      <Image source={{ uri: imageurl }} style={{ width: 200, height: 200 }} />
    </View>
  )
}

export default Send

const styles = StyleSheet.create({})