import {KeyboardAvoidingView,Keyboard, Dimensions, View,Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, Platform } from "react-native"
import Checkout from "../components/Checkout"
import tw from 'tailwind-react-native-classnames';
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
// import { ImagePicker } from 'expo-image-multiple-picker'
import * as ImagePicker from 'expo-image-picker';
import { FlatList } from "react-native-gesture-handler";
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from "react-redux";
import { selectDeliveryMedium, selectDeliveryType, selectDestination, selectOrigin, selectTravelTimeInformation, setDeliveryDetails, selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import {useDispatch} from 'react-redux'

const data = [
    { label: 'Fragile', value: 'fragile' },
    { label: 'Non-fragile', value: 'non-fragile' },
  ];

  const SURGE_CHARGE_RATE = 1.5;


export default InstantDeliveryInput=()=>{

  const [receiversPhoneNumber, setReceiversPhoneNumber] = useState('')
  const [sendersPhoneNumber, setSendersPhoneNumber] = useState('')
  const [sendersName, setSendersName] = useState('')
  const [receiversName, setReceiversName] = useState('')
  const [parcelName, setParcelName] = useState('')
  const [parcelDesc, setParcelDesc] = useState('')
  const [deliveryInstruction, setDeliveryInstruction] = useState('')

  const deliveryMedium = useSelector(selectDeliveryMedium)
  const deliveryType = useSelector(selectDeliveryType)
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  
  const userInfo = useSelector(selectUserInfo)

  const dispatch = useDispatch()
  const [fillInDetails, setFillInDetails] = useState(false)
  console.log(deliveryMedium.amount)
    const navigation = useNavigation()

    const [value, setValue] = useState(null);

    const [images, setImages] = useState([])
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

  //  console.log(travelTimeInformation)
  //  console.log(deliveryMedium.amount)
  // console.log(userInfo.token)

   const amountForDelivery = (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * deliveryMedium.amount) / 100

    const addImage=async()=>{
      let _image = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: true,
          selectionLimit:5,
          // allowsEditing: true,
          aspect: [4,3],
          quality: 1,
      });
   
    //  console.log(_image.selected)

      setImages(_image.selected)

    
    }

    console.log(deliveryType)


    const clickOnNext = ()=>{
   
          if(!sendersName || !sendersPhoneNumber || !receiversName || !receiversPhoneNumber || !parcelName || !parcelDesc || !deliveryInstruction || !value  ){
            setFillInDetails(true)
            return
          } 
          
            handleDeliveryInput()
           
        }
    
    
    let formdata = new FormData();
    formdata.append("sendersName", sendersName);
    formdata.append("receiversName", receiversName);
    formdata.append("sendersPhone", sendersPhoneNumber);
    formdata.append("receiversPhone", receiversPhoneNumber);
    formdata.append("parcelName", parcelName);
    formdata.append("parcelType", value);
    formdata.append("medium", deliveryMedium.name);
    formdata.append("deliveryInstruction", deliveryInstruction);
    formdata.append("dropoff_name", destination.description);
    formdata.append("deliveryType", deliveryType);
    formdata.append("dropoff_lat", destination.location.lat);
    formdata.append("dropoff_long", destination.location.lng);
    formdata.append("pickup_name", origin.description);
    formdata.append("pickup_lat", origin.location.lat);
    formdata.append("pickup_long", origin.location.lng);
    formdata.append("amount", amountForDelivery);
    images.forEach((image,index) =>{
      formdata.append("images[]",{
        uri: image.uri,
        name: image.fileName,
       type: image.type
     } )
   })

    let reqOptions = {
      url:'https://ryder-app-production.up.railway.app/api/user/delivery',
      method: "POST",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: formdata,
    }
    

    
        const handleDeliveryInput =async()=>{
    
          // setLoading(true)
       try {
       
     let eachDelivery = await axios.request(reqOptions);
     console.log(eachDelivery.data);
    
         dispatch(setDeliveryDetails(eachDelivery.data))
        //  setLoading(false)
        
            navigation.navigate('Delivery Summary')
         
    
       } catch (error) {
        console.error(error)
        //  if(error.response.status !== 500 ){
           
        //              if(error.response.data.errors.email){
        //                console.log(error.response.data.errors.email[0])
        //                setErrorMessage(error.response.data.errors.email[0])
        //              } else if (error.response.data.errors.password){
        //                setErrorMessage(error.response.data.errors.password[0])
        //              console.log(error.response.data.errors.password[0])
                     
        //              }
    
        //    setFeedbackMessage('')
      
        //  } 
        //   else {
        //    setErrorMessage('')
        //  }
       }
       
     }
  

    return(
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
        <ScrollView>
      {/* <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "null"}
       style={{flex:1}}
       > */}
       
       <View       style={{
          height: Dimensions.get("window").height * 1.8,
          backgroundColor: "lightgrey",
          width: Dimensions.get("window").width,
          backgroundColor:'white', overflow: 'scroll' 
        }} >
        <Checkout />

        <View style={{margin:20}}>
        {fillInDetails &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Fill in all delivery details</Text>}
            <Text>Senders Name*</Text>
            <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="name"
                    onFocus={()=>{setFillInDetails(false)}}
                    value={sendersName}
                    onChangeText={(text) => setSendersName(text)}
                />
            <Text style={{ marginTop: 20}}>Senders Phone Number*</Text>
            <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: "rgba(218, 218, 218, 0.4)",height:45,  width: '90%', borderRadius: 10,}}>
                    <Image
                         style={{width:40, height: 40, resizeMode: 'contain',alignSelf:'center',marginLeft:80 }}
                         source={require('../assets/flag.png')}
                  />
                  <Text style={tw`pl-2 pr-2`}>+234</Text>
                  <View style={{height: '100%',width:2, backgroundColor:'lightgray', marginRight: 5}}></View>
                   <TextInput
                    style={{width:'90%'}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="telephoneNumber"
                    onFocus={()=>{setFillInDetails(false)}}
                    value={sendersPhoneNumber}
                    onChangeText={(text) => setSendersPhoneNumber(text)}
                />

                </View>

            <Text  style={{ marginTop: 20}}>Receivers Name*</Text>
            <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="name"
                    onFocus={()=>{setFillInDetails(false)}}
                    value={receiversName}
                    onChangeText={(text) => setReceiversName(text)}
                />
            <Text style={{ marginTop: 20}}>Receivers Phone Number*</Text>
            <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: "rgba(218, 218, 218, 0.4)",height:45,  width: '90%', borderRadius: 10,}}>
                    <Image
                         style={{width:40, height: 40, resizeMode: 'contain',alignSelf:'center',marginLeft:80 }}
                         source={require('../assets/flag.png')}
                  />
                  <Text style={tw`pl-2 pr-2`}>+234</Text>
                  <View style={{height: '100%',width:2, backgroundColor:'lightgray', marginRight: 5}}></View>
                   <TextInput
                    style={{width:'90%'}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={()=>{setFillInDetails(false)}}
                    textContentType="telephoneNumber"
                    value={receiversPhoneNumber}
                    onChangeText={(text) => setReceiversPhoneNumber(text)}
                />

                </View>
                <Text style={{ marginTop: 20}}>Parcel Name*</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    textContentType="name"
                    onFocus={()=>{setFillInDetails(false)}}
                    value={parcelName}
                    onChangeText={(text) => setParcelName(text)}
                />

            <Text style={{ marginTop: 20}}>Parcel Type*</Text>

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                // searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
            />

            <Text  style={{ marginTop: 20}}>Parcel Description</Text>
            <TextInput
                    style={styles.inputTwo}
                    autoCapitalize="none"
                    textContentType="name"
                    multiline={true}
                    onFocus={()=>{setFillInDetails(false)}}
                    value={parcelDesc}
                    onChangeText={(text) => setParcelDesc(text)}
                />
                 <Text  style={{ marginTop: 20}}>Delivery Instructions</Text>
                   <TextInput
                    style={styles.inputThree}
                    autoCapitalize="none"
                    textContentType="name"
                    multiline={true}
                    onFocus={()=>{setFillInDetails(false)}}
                    value={deliveryInstruction}
                    onChangeText={(text) => setDeliveryInstruction(text)}
                />
                <View style={{backgroundColor: 'white'}}>

                <Text style={{ marginTop: 20}}>Add images of your parcel (optional)</Text>


                
                 <Icon
                    onPress={addImage}
                    style={{alignSelf: 'left', margin:20}}
                    name='add-circle'
                    color='gray'
                    type='ionicons'
                    size={38}
                />
               {

                <FlatList
                data={images}
                scrollEnabled={false}
                horizontal
                keyExtractor={(item) => item.uri}
                renderItem={({ item }) =>
                <Image
                       source={{ uri: item.uri }}
                       style={{ width: 100, height: 100, margin:5, borderRadius:10 }}
                    />
                }
              />
               }

              


                </View>

                <Text  style={{ marginTop: 20}}>Maximum of 2 images are allowed</Text>

                <Text  style={{ marginTop: 20, marginRight: 14}}>N/B: The closest available BIKE delivery agent would receive and confirm your request after which you’ll be directed to the payment page.</Text>
                
                <TouchableOpacity
                onPress={clickOnNext}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Proceed</Text>
                 </TouchableOpacity>



            
          </View>
         </View>
    
       {/* </KeyboardAvoidingView>*/}
       </ScrollView> 

</KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: "rgba(218, 218, 218, 0.4)",
      height: 40,
      // marginTop: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
      width: '90%'
    },
    inputTwo: {
        backgroundColor: "rgba(218, 218, 218, 0.4)",
        height: 80,
        // marginTop: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        width: '90%'
      },
      inputThree: {
        backgroundColor: "rgba(218, 218, 218, 0.4)",
        height: 100,
        // marginTop: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        width: '90%'
      },
    button: {
      backgroundColor: '#E7B717',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: '60%',
      color: 'black',
      alignSelf: 'center',
      // marginBottom: 20
    },
    dropdown: {
        // margin: 2,
        height: 50,
        borderBottomColor: 'gray',
        borderRadius: 10,
        width:'90%',
        backgroundColor: 'rgba(218, 218, 218, 0.4)'
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
  
  });
  