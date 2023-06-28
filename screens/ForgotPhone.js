import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import {useDispatch} from 'react-redux'
import {  setAuthLoading,  setUserInfo,setAuthError, setAuthSuccess } from "../slices/authSlice";

export default function ForgotPhone() {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [errorMessage,setErrorMessage] = useState('')


  
    
      const HandleForgotPassword =()=>{

        // if(!email){
        //   setErrorMessage('Please enter an email address')
        // }

        
       
        // try {
       
        // // const newPassAuth =  await axios.post(`https://ryder-app.up.railway.app/api/user/reset-mail?email=${email}`);
        //   // dispatch(setUserInfo(eachUser.data))
        //   // setLoading(false)
        //   console.log(email)
        //   console.log(newPassAuth)
        //  navigation.navigate('VerifyForgottenPasswordToken')
         
    
        // } catch (error) {
       
        // }
         console.log(email)
        const options = {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:email}),
          };
          
        
        fetch('https://ryder-app-production.up.railway.app/api/user/reset-mail', options)
        .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      dispatch(setUserInfo(update))
         navigation.navigate('VerifyForgottenPasswordToken')
         
     
      }).catch(e => {
      console.log(e.response);
      })
      }
    
    
  return (
    <SafeAreaView style={styles.OnboardingContainer}>

           
              <Text style={tw`text-center text-xl m-3`}>Forgot Password</Text>
              <Text style={tw`text-center text-sm m-7`}>Please enter the email address you used when creating an account on this platform, We will send you password recovery instructions</Text>
              <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', fontSize:15}}>{errorMessage}</Text>
              <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={()=>{setErrorMessage('')}}
                    textContentType="name"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                  <TouchableOpacity
                  onPress={HandleForgotPassword}
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
    marginTop: 10,
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
