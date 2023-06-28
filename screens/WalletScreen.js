import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet,Button, Text, TouchableOpacity, View, TextInput, Alert, Dimensions } from 'react-native';
import { Card, Icon, Avatar  } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import HomeNavBottom from '../components/HomeNavBottom';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import UploadImage from '../components/UploadImage';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { selectUserInfo } from '../slices/authSlice';
import { useSelector } from 'react-redux';


export default function Profile() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigation = useNavigation()

    const userInfo = useSelector(selectUserInfo)
    console.log('-----',userInfo)

   

   

 
  return ( 
  
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
        
            

        <Text style={{color:'white', fontWeight:'bold',fontSize:20}}>My Wallet</Text>

       

        </View>

    <View>
       
        
    </View>
                 
                  
        </View>

        <View style={{height: '75%', marginTop:-50,}}>

   



          <View style={{height:140, width:'70%',backgroundColor:'goldenrod',alignSelf:'center',marginTop:20,borderRadius:5, display:'flex',alignItems:'center',justifyContent:'center', gap:5,padding:20, }}>

            <Text style={{fontSize:15,fontWeight:'normal'}}>Wallet Balance</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>N2000.00</Text>
            <View style={{backgroundColor:'yellow',alignSelf:'center',borderRadius:5, display:'flex',flexDirection:'row',alignItems:'center',padding:5,alignSelf:'center',gap:10}}>
           
            <Icon
                    name='money'
                    color='black'
                    type='fontawesome'
                    size={28}
                        />
            </View>
          </View>



          <View style={{display: 'flex', justifyContent: 'center',  marginTop:10, padding:20}}>


          <Text style={{padding:20, backgroundColor:'lightgray',marginTop:20, fontWeight:'bold'}}>Account ID:  877776</Text>
          <Text style={{padding:20, backgroundColor:'lightgray',marginTop:20, fontWeight:'bold'}}>Account Number:  877776</Text>
          <Text style={{padding:20, backgroundColor:'lightgray',marginTop:20, fontWeight:'bold'}} >Bank Name:  877776</Text>
            


                {/* <TouchableOpacity
                onPress={createTwoButtonAlert}
                style={styles.button} >
                     <Text style={{ color: 'black', fontSize: 18}}> Save and Update</Text>
                 </TouchableOpacity> */}

          </View>
        

           
        

           

        </View>

           
      
        
    </SafeAreaView>
   
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
