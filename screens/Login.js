import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View , Modal} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon,} from 'react-native-elements'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {  setAuthLoading,  setUserInfo,setAuthError, setAuthSuccess } from "../slices/authSlice";
import Loader from '../components/Loader';

export default function Login() {

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [logginMessage, setLogginMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()

    const [feedbackMessage,setFeedbackMessage] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
  

    const [editPassword, setEditPassword] = useState(false)
    const [fillInDetails, setFillInDetails] = useState(false)


  
    
      const handleLogin =async()=>{

        // if( !email  || !password){
        //   setFillInDetails(true)
        //   return
        // }
    console.log(email, password)
          //  setLoading(true)
        try {
          // console.log(postData)
        
        const loggedInUser =  await axios.post(`https://ryder-app-production.up.railway.app/api/user/login?email=${email}&password=${password}`);
          dispatch(setUserInfo(loggedInUser.data))
          // setLoading(false)
          // console.log(loggedInUser.data.message)
          setLogginMessage(loggedInUser.message)
          setShowMessage(true)
         navigation.navigate('VerifyToken')
       
          
          
        } catch (error) {

         
   if(error.response.status !== 500 ){
    setLogginMessage(error.response.data.message)
              //  console.log(error.response.data.errors.email[0])
              //  setErrorMessage(error.response.data.errors.email[0])

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
        <Text style={styles.signupTitle}>Login</Text>
        <Text style={[tw`pl-8 `, {fontSize: 20, fontWeight: 'normal', width: 300}]}>Welcome back</Text>
        <Text style={[tw`pl-8  `, {fontSize: 20, fontWeight: 'normal', width: 300, marginBottom: 80}]}>It's great to see you again</Text>

        <Text style={{color:'red', textAlign:'center', fontWeight:'bold'}}>{logginMessage}</Text>
    
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>{errorMessage}</Text>
    {fillInDetails &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Fill in complete details</Text>}
    {/* <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: "#F6F7FB",height:45,  width: '80%', borderRadius: 10,}}>
                    <Image
                         style={{width:40, height: 40, resizeMode: 'contain',alignSelf:'center',marginLeft:80 }}
                         source={require('../assets/flag.png')}
                  />
                  <Text style={tw`pl-2 pr-2`}>+234</Text>
                  <View style={{height: '100%',width:1, backgroundColor:'lightgray', marginRight: 5}}></View>
                   <TextInput
                    style={{width:'90%'}}
                    placeholder="Phone Number"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={()=>{ setFillInDetails(false)}}
                    textContentType="telephoneNumber"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />

                </View> */}


                {/* <Text style={{alignSelf:'flex-start', marginLeft:40,marginBottom:5,fontSize:15,color:'gray',marginTop:10}}>Email</Text> */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onFocus={()=>{ setFillInDetails(false),setErrorMessage(''), setLogginMessage('')}}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    onFocus={()=>{ setFillInDetails(false),setErrorMessage(''), setLogginMessage('')}}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                                <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPhone')}
                 style={{width:'80%',marginTop:-10,marginBottom: 20}}>
                <Text style={{textAlign:'right'}}>Forgot Password ?</Text>
                </TouchableOpacity>


            {/* <Modal
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

                        <TouchableOpacity  onPress={() =>{ navigation.navigate('VerifyToken'),setModalVisible(!modalVisible)}} style={[styles.button , {marginTop:10}]}>

                            <View>
                            <Text style={styles.modalText}>Send token to Email</Text>
                

                            </View>

                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal> */}



                <TouchableOpacity
                 onPress={handleLogin}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Login</Text>
                 </TouchableOpacity>
                     <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Dont have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Sign up</Text>
                        </TouchableOpacity>
                    </View>



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
        fontSize:20,
        margin:40,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 45,
    marginTop: 10,
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
    marginTop: 40,
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
    // marginBottom: 15,
    // textAlign: 'center',
    fontSize:13,
    fontWeight:500,
    padding:5,
    textAlign:'center',
    color:'black'
  },

});
