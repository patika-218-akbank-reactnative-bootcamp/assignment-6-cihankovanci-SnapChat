import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import CustomButton from '../components/CustomButton.js/CustomButton';

import * as ImagePicker from 'expo-image-picker';


const handleSelect = () =>{
   
  };

  const openCamera = ({navigation}) =>{
    navigation.navigate('Send', {
        imageurl: props.image,
        
      });
};

const Home = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

    useEffect(()=> {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      if(hasGalleryPermission === false){
        return <Text>No access to Internal storage</Text>
      }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

     
      <CustomButton title="Select from Library" onPress={pickImage} />
      
      <CustomButton title="Open Camera" onPress={() => {navigation.navigate('Send', {imageurl: image, otherParam: 'test',})}} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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