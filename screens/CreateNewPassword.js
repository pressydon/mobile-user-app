import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from "react-redux";
import { setAuthSuccess, selectUserInfo, selectAuthLoading, selectAuthSuccess, selectAuthError } from "../slices/authSlice";
import {useDispatch} from 'react-redux'
import axios from 'axios'

export default function ForgotPhone() {


    const navigation = useNavigation()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [editPassword, setEditPassword] = useState(false)
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUserInfo)
   
    console.log(userInfo.user.email)
    console.log(password)
    console.log(userInfo.token)
    
     const clickToCreateNewPasswordAndSignIn = ()=>{

        const apiUrl = 'https://ryder-app.up.railway.app/api/user/reset-password';
const token = userInfo.token;

const postData = {
  email: userInfo.user.email,
  password: password,
};

axios.post(`${apiUrl}`, postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    console.log('Post created successfully:', response.data);
    navigation.navigate('Homepage')
    // Handle successful response
  }).catch((error) => {
    console.error('Error creating post:', error);
    // Handle error
  });

      
      }



  return (
    <SafeAreaView style={styles.OnboardingContainer}>

           
         
              <Text style={tw`text-center text-sm m-7`}>Password must be atleast 8 characters long</Text>
              {editPassword &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Passwords dont match, try again!</Text>}
              <TextInput
                    style={styles.input}
                    placeholder="Enter New Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                     <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                  <TouchableOpacity 
                  onPress={clickToCreateNewPasswordAndSignIn}
                  style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Submit</Text>
                 </TouchableOpacity>
             
       
    </SafeAreaView>
    ) ;
}

const styles = StyleSheet.create({
    OnboardingContainer: {
        height:'100%',
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 45,
    marginBottom: 20,
    marginTop: 30,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    width: '80%',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#E7B717',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    width: '80%',
    alignSelf: 'center'
  },
});
