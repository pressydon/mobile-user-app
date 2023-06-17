import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet,Button, Text, TouchableOpacity, View, TextInput, Alert, Dimensions } from 'react-native';
import { Card, Icon, Avatar  } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import HomeNavBottom from '../components/HomeNavBottom';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import UploadImage from '../components/UploadImage';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default function Profile() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigation = useNavigation()

    const createTwoButtonAlert = () =>
    Alert.alert('Confirm Phone number', 'We would be verifying this phone number 08067658765 please confirm the number is okay or would you like to edit the number?', [
      {
        text: 'Edit number',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Okay', onPress: () => console.log('proceed'),},
    ]);


   

 
  return ( 
    <KeyboardAwareScrollView
    nestedScrollEnabled={true}
    keyboardShouldPersistTaps='handled'
    horizontal={true}
    extraHeight={120}
    style={{
      
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
    }}
    >
   <SafeAreaView style={styles.profileContainer}>
      
      <View style={{width:'100%', height:190, backgroundColor:'black'}}>

        <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:30}}>

        <Icon
            onPress={() => navigation.goBack(null)}
             style={tw`  w-10 `}
             name='left'
             color='white'
             type='antdesign'
              />
        
            

        <Text style={{color:'white', fontWeight:600,fontSize:20}}>My Account</Text>

        <Icon
            onPress={() => navigation.navigate('ProfileSettings')}
             style={tw`  w-10 `}
             name='setting'
             color='goldenrod'
             type='antdesign'
              />

        </View>

    <View>
    <View  style={{alignSelf:'center',marginTop:20, borderRadius:100,borderWidth:3, borderColor:'goldenrod',padding:5,}}>


    

    <UploadImage />

  

   {/* <Avatar
           size={100}
           rounded
           source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
       />
             */}

        </View>

        {/* <TouchableOpacity  style={{position:'absolute', bottom:0, right:135}}>

        <Icon
        name='camera'
        color='gray'
        type='entypo'
        size={28}
         />

        </TouchableOpacity> */}

       
        
    </View>
                 
                  
        </View>

        <View style={{height: '69%', marginTop:-20}}>

          
          <View style={{display:'flex', flexDirection:'row',alignItems:'center',gap:20,justifyContent:'center',alignSelf:'center',marginTop:70,width:'80%'}}>

            <View style={{width:100,marginLeft:40,alignSelf:'center'}}>
                <View style={{backgroundColor:'yellow', width:40,height:40,borderRadius:5,alignSelf:'center',padding:5}}>
                <Image
                    style={{width:40,height:40,alignSelf:'center',marginTop:-5 }}
                    resizeMode="contain"
                    source={require('../assets/fast.png')}
                    />
               
                </View>
                <Text style={{textAlign:'center',marginTop:5}}>126 Instant deliveries</Text>
            </View>

            <View style={{width:100,alignSelf:'center'}}>
                  <View style={{backgroundColor:'yellow', width:40,height:40,borderRadius:5,alignSelf:'center',padding:5}}>
                  <Image
                style={{width:30,height:30,}}
                resizeMode="contain"
                source={require('../assets/calender.png')}
                />
                  </View>
                  <Text style={{textAlign:'center',marginTop:5}}>17 Scheduled deliveries</Text>
            </View>

            <View style={{width:100,marginRight:40,alignSelf:'center'}}>
                <View style={{backgroundColor:'yellow', width:40,height:40,borderRadius:5,alignSelf:'center',padding:5}}>

                <Icon
                    name='uninstall'
                    color='red'
                    type='entypo'
                    size={28}
                        />
                </View>
         
                <Text style={{textAlign:'center',marginTop:5}}>20 Cancelled rides</Text>
            </View>

          </View>



          <View style={{height:140, width:'70%',backgroundColor:'goldenrod',alignSelf:'center',marginTop:20,borderRadius:5, display:'flex',alignItems:'center',justifyContent:'center', gap:5,padding:20}}>

            <Text style={{fontSize:15,fontWeight:300}}>Wallet Balance</Text>
            <Text style={{fontSize:20,fontWeight:600}}>N2000.00</Text>
            <View style={{backgroundColor:'yellow',alignSelf:'center',borderRadius:5, display:'flex',flexDirection:'row',alignItems:'center',padding:5,alignSelf:'center',gap:10}}>
           
            <Icon
                    name='money'
                    color='black'
                    type='fontawesome'
                    size={28}
                        />
         <Text>Fund Wallet</Text>
             

            </View>
          </View>



          <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:10}}>

    <TextInput
                    style={styles.input}
                    placeholder="Enter Full Name"
                    autoCapitalize="none"
                    textContentType="name"
                    autoFocus={true}
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: "#F6F7FB",height:45,  width: '80%', borderRadius: 10,}}>
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
                    secureTextEntry={true}
                    textContentType="telephoneNumber"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />

                </View>


                <TouchableOpacity
                onPress={createTwoButtonAlert}
                style={styles.button} >
                     <Text style={{ color: 'black', fontSize: 18}}> Save and Update</Text>
                 </TouchableOpacity>

          </View>
        

           
        

           

        </View>

           
      
        
    </SafeAreaView>
    </KeyboardAwareScrollView>
     ) ;
}

const styles = StyleSheet.create({
    profileContainer: {
      height: Dimensions.get("window").height * 1.8,
          backgroundColor: "lightgrey",
          width: Dimensions.get("window").width,
          backgroundColor:'white', overflow: 'scroll'
      
  },
  input: {
    // backgroundColor: "rgba(218, 218, 218, 0.4)",
    height: 40,
    // marginTop: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    width: '80%'
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
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '60%',
    color:'black'
  },
  
});
