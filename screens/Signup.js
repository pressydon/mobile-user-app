import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Modal,Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon,} from 'react-native-elements'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {  setAuthLoading,  setUserInfo,setAuthError, setAuthSuccess } from "../slices/authSlice";
import Loader from '../components/Loader';

export default function Signup() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [editPassword, setEditPassword] = useState(false)
    const [fillInDetails, setFillInDetails] = useState(false)

    const [feedbackMessage,setFeedbackMessage] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
  
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

   const dispatch = useDispatch()

const apiUrl = 'https://ryder-app-production.up.railway.app/api/register';
// const token = 'YOUR_BEARER_TOKEN';

const postData = {
  email: email,
  name: fullName,
  phoneNumber: phoneNumber,
  password: password
};



const clickOnSignup = ()=>{

  if(password === confirmPassword){
    setModalVisible(true)
  }else{
    setEditPassword(true)
    return
  }

  if(!fullName || !email || !phoneNumber || !password){
    setFillInDetails(true)
    setModalVisible(false)
    return
  } else if(fullName || email || phoneNumber || password && password === confirmPassword){
    setModalVisible(true)
  } 


}

  const handleSignUp =async()=>{

       setLoading(true)
    try {
      // console.log(postData)
    
    const eachUser =  await axios.post(`https://ryder-app-production.up.railway.app/api/user/register?name=${fullName}&email=${email}&password=${password}`);
      dispatch(setUserInfo(eachUser.data))
      setLoading(false)
      console.log(eachUser.data)
     navigation.navigate('VerifyToken')
     setModalVisible(false)
      
      

    } catch (error) {
      console.error(error.response.data)
      if(error.response.status !== 500 ){
        
                  if(error.response.data.errors.email){
                    console.log(error.response.data.errors.email[0])
                    setErrorMessage(error.response.data.errors.email[0])
                  } else if (error.response.data.errors.password){
                    setErrorMessage(error.response.data.errors.password[0])
                  console.log(error.response.data.errors.password[0])
                  
                  }

        setFeedbackMessage('')
        setModalVisible(!modalVisible)
      } 
       else {
        setErrorMessage('')
      }
    }
    
  }

  return (
    <SafeAreaView style={styles.signupContainer}>
   {loading &&   <Loader />}
        <Text style={styles.signupTitle}>Sign up</Text>
        <Text style={[tw`pl-8 `, {fontSize: 20, fontWeight: 'bold', width: 150}]}>Welcome,</Text>
        <Text style={[tw`pl-8  `, {fontSize: 20, fontWeight: 'bold', width: 300, marginBottom: 40}]}>Let's get started</Text>
    
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>{errorMessage}</Text>
        {editPassword &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Passwords dont match, try again!</Text>}
        {fillInDetails &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Fill in complete details</Text>}
            <TextInput
                    style={styles.input}
                    placeholder="Enter Full Name"
                    autoCapitalize="none"
                    textContentType="name"
                    autoFocus={true}
                    value={fullName}
                    onFocus={()=>{setEditPassword(false), setFillInDetails(false)}}
                    onChangeText={(text) => setFullName(text)}
                />
             <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="name"
                    value={email}
                    onFocus={()=>{setEditPassword(false), setFillInDetails(false), setErrorMessage('')}}
                    onChangeText={(text) => setEmail(text)}
                />
                <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: "#F6F7FB",height:45,  width: '80%', borderRadius: 10, marginBottom:10}}>
                    <Image
                         style={{width:40, height: 40, resizeMode: 'contain',alignSelf:'center',marginLeft:80 }}
                         source={require('../assets/flag.png')}
                  />
                  <Text style={tw`pl-2 pr-2`}>+234</Text>
                  <View style={{height: '100%',width:2, backgroundColor:'lightgray', marginRight: 5}}></View>
               <TextInput
                    style={{width:'90%'}}
                    placeholder="Enter Phone Number"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="telephoneNumber"
                    value={phoneNumber}
                    onFocus={()=>{setEditPassword(false), setFillInDetails(false), setErrorMessage('')}}
                    onChangeText={(text) => setPhoneNumber(text)}
                />

                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    onFocus={()=>{setEditPassword(false), setFillInDetails(false),  setErrorMessage('')}}
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
                    onFocus={()=>{setEditPassword(false), setFillInDetails(false),  setErrorMessage('')}}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />




            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}  >
                   
                    <View style={styles.modalView}>
                    <Icon
                                
                                onPress={() => setModalVisible(!modalVisible)}
                                name='close'
                                color='red'
                                type='antdesign'
                                size={20}
                                />
                        <TouchableOpacity    onPress={() =>{ navigation.navigate('VerifyToken'),setModalVisible(!modalVisible)}} style={styles.button} >
                      
                        <Text style={styles.modalText}>Send token to Phone Number</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={handleSignUp} style={[styles.button , {marginTop:10}]}>

                            <View>
                            <Text style={styles.modalText}>Send token to Email</Text>
                

                            </View>

                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>


                <TouchableOpacity
                 onPress={clickOnSignup}
                style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign up</Text>
                 </TouchableOpacity>
                     <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                        <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 14}}>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{color: '#f57c00', fontWeight: 'bold', fontSize: 14}}> Login</Text>
                        </TouchableOpacity>
                    </View>


                    <Text style={{marginTop:30, width:210, fontSize:12, textAlign:'center'}}>By continuing you agree to our Terms of Services and Privacy Policy</Text>


    </View> 
      
        
    </SafeAreaView>
     ) ;
}

const styles = StyleSheet.create({
    signupContainer: {
        height:'100%',
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
  },
  signupTitle:{
        textAlign: 'center',
        fontSize:25,
        margin:40,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 45,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    width: '80%'
  },
  button: {
    backgroundColor: '#E7B717',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '80%'
  },

  centeredView: {
      
    flex:1,
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -130,
  },
  modalView: {
    width:300,
    height:250,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#E7B717',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize:13,
    fontWeight:'bold',
    padding:5,
    textAlign:'center',
    color:'black'
  },

});
