import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'

const Home = () => {
  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})