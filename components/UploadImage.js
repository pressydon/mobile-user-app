import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../slices/authSlice';

export default UploadImage =()=>{
    const [image, setImage] = useState(null);

    const userInfo = useSelector(selectUserInfo)

//     const  checkForCameraRollPermission=async()=>{
//         const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//           alert("Please grant camera roll permissions inside your system's settings");
//         }else{
//           console.log('Media Permissions are granted')
//         }
//   }

  const addImage=async()=>{
    let _image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        selectionLimit:1,
        // allowsEditing: true,
        aspect: [4,3],
        quality: 1,
    });
 
  //  console.log(_image.selected)

    setImage(_image.selected[0].uri)

    // console.log(_image.selected[0])
  
  }

    console.log(image)

    // useEffect(() => {
    //     checkForCameraRollPermission()
    //   }, []);
      
    // let formdata = new FormData()
    // formdata.append("image", {
    //     uri: image?.uri,
    //     name: image?.fileName,
    //     type: image?.type
    //   });

      let headersList = {
        "Accept": "/",
        "Authorization": `Bearer ${userInfo.token}`
      }
      
    //   console.log(formdata)
    const saveAndUpdateImage=async()=>{

        console.log('called update')
        setLoading(true)
        try {
          let reqOptions = {
            url: `https://ryder-app-production.up.railway.app/api/user/${userInfo.user.id}?`,
            method: "PUT",
            headers: headersList,
            // data: formdata,
          }
  
          let response = await axios.request(reqOptions);
          console.log(response.data.data);
          // dispatch(setUserInfo(response.data.data))
          setLoading(false)
  
        } catch (error) {
          console.error(error)
        }
      }


    return(
        <View style={imageUploaderStyles.container}>
        {
            image  && <Image source={{ uri: userInfo.img ? userInfo.img : image ? image : 'https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg'}} style={{ width: 200, height: 200 }} />
        }
            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                    <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>
    </View>
    )
}


const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:130,
        width:130,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'38%',
        zIndex:10,
       
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }


})