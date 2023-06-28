import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,ScrollView, Button } from "react-native"
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from "react-redux";
import { selectDeliveryMedium, selectDeliveryType, selectDestination, selectOrigin, selectTravelTimeInformation, setDeliveryDetails, selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import Loader from "../components/Loader";
import moment from "moment";

const data = [
  { label: 'Fragile', value: 'fragile' },
  { label: 'Non-fragile', value: 'non-fragile' },
];

const SURGE_CHARGE_RATE = 1.5;

export default ScheduleDeliveryInput=()=>{
  const [receiversPhoneNumber, setReceiversPhoneNumber] = useState('')
  const [sendersPhoneNumber, setSendersPhoneNumber] = useState('')
  const [sendersName, setSendersName] = useState('')
  const [receiversName, setReceiversName] = useState('')
  const [parcelName, setParcelName] = useState('')
  const [parcelDesc, setParcelDesc] = useState('')
  const [deliveryInstruction, setDeliveryInstruction] = useState('')

  const navigation = useNavigation()

  const [value, setValue] = useState(null);


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState('date');
  const [showDate, setShowDate] = useState('Pick Date/Time')
  const [show, setShow] = useState(false)
  const [removeButton, setRemoveButton] = useState(false)
  const [showTime, setShowTime] = useState('');


  const [pickupDate, setPickupDate] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const deliveryMedium = useSelector(selectDeliveryMedium)
  const deliveryType = useSelector(selectDeliveryType)
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const [loading, setLoading] = useState(false)
  const userInfo = useSelector(selectUserInfo)

  const dispatch = useDispatch()
  const [fillInDetails, setFillInDetails] = useState(false)
  console.log(deliveryMedium.amount)
   const [dbDate, setDBDate] = useState('')
   const [dbTime, setDBTime] = useState('')

    const [images, setImages] = useState([])
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

 

    const addImage=async()=>{
      let _image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        selectionLimit:2,
        // allowsEditing: true,
        aspect: [4,3],
        quality: 1,
    });
      // console.log(JSON.stringify(_image.assets));

      // setImages(_image.assets[0].uri ? [_image.assets[0].uri] : _image.selected);

     

      setImages(_image.selected)

      // console.log(_images.assets)
    }
  
    console.log(images)

  const showDatePicker = (currentMode) => {
    setDatePickerVisibility(true);
    setMode(currentMode)
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {


     setShowDate(date.toLocaleDateString())
      setShowTime(date.toLocaleTimeString());

      const formattedDate = moment(date).format('YYYY/MM/DD');
      // console.log('-----',date.toLocaleTimeString())
      setDBDate(formattedDate)
      const formattedTime = moment(date).format('HH:mm:ss');
      

      console.log('---',formattedTime)
      setDBTime(formattedTime)

      // console.log('-----------',date)
      hideDatePicker();
     

     
      
      setRemoveButton(true)
     
 
  };

  //  console.log(travelTimeInformation)
  //  console.log(deliveryMedium.amount)
  // console.log(userInfo.token)

   const amountForDelivery = (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * deliveryMedium.amount) / 100


  

    // images.map((item)=>{
    //   console.log(item.uri)
    // })

 

    const clickOnNext = ()=>{
   
          if(!sendersName || !sendersPhoneNumber || !receiversName || !receiversPhoneNumber || !parcelName || !deliveryInstruction || !value  ){
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
    formdata.append("pickup_date", dbDate);
    formdata.append("pickup_time", dbTime);


      images?.forEach((image,index) =>{
        formdata.append("images[]",{
          uri: image.uri,
          name: image.fileName,
         type: image.type
       } )
     })


   
 console.log(showTime)
 console.log(dbDate)
    
    
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
    
          setLoading(true)
       try {
       
     let eachDelivery = await axios.request(reqOptions);
     console.log(eachDelivery.data);
    
         dispatch(setDeliveryDetails(eachDelivery.data))
      
        
        navigation.navigate('Schedule Delivery Summary')
            setLoading(false)
    
       } catch (error) {
        console.error(error.response.data)
           setLoading(false)
        if (error.response) {
          setErrorMessage('An error occurred during pairing. Please check your Network provider and try again.');
        }

       }
       
     }
  


  

  return(
      <ScrollView>
     <View style={{backgroundColor:'white', overflow: 'scroll' }}>
      <Checkout />

      <View style={{margin:20}}>

          <Text>Senders Name*</Text>
          <TextInput
                  style={styles.input}
                  autoCapitalize="words"
                  autoCorrect={false}
                  textContentType="addressCityAndState"
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
                  onFocus={()=>{setFillInDetails(false)}}
                  textContentType="telephoneNumber"
                  value={sendersPhoneNumber}
                  onChangeText={(text) => setSendersPhoneNumber(text)}
              />

              </View>

          <Text  style={{ marginTop: 20}}>Receivers Name*</Text>
          <TextInput
                  style={styles.input}
                  autoCapitalize="words"
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
              value={value}
              onChange={item => {
              setValue(item.value);
              }}
              renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              )}
          />

          {/* <Text  style={{ marginTop: 20}}>Parcel Description</Text>
          <TextInput
                  style={styles.inputTwo}
                  autoCapitalize="none"
                  textContentType="name"
                  multiline={true}
                  onFocus={()=>{setFillInDetails(false)}}
                  value={parcelDesc}
                  onChangeText={(text) => setParcelDesc(text)}
              /> */}
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

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20, alignSelf: 'center'}}>
                  <Text style={{paddingTop:20,paddingRight:20}}>Schedule delivery date/time</Text>
                  <View>
                    {   removeButton ? 
                    <View>

                    
                     <TouchableOpacity style={styles.calender } >
                         <Button color='black' title={showDate } onPress={()=>showDatePicker('date')} /> 
                     </TouchableOpacity>

                     <Text style={[{textAlign:'center', alignSelf:'center',paddingTop:10},styles.calender ]}>{showTime }</Text>
                    </View>
                   
                    :
                     <TouchableOpacity style={styles.calender} >
                    <Button color='black' title='Pick Date' onPress={showDatePicker} />
                    </TouchableOpacity>
                    }
                      
                  </View>
                </View>


                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        // date={selectedDate}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        // is24Hours={true}
                        // onChange={()=>null}
                        // modalStyleIOS={{color:'gold'}}
                      />

                  

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
                  //     images && 
                  //  images.map((item,index)=>(
                    <View 
                    style={{display:'flex', flexDirection:'row'}}
                    >
                         {
                      images.map((item, index)=>(
               
              <Image
                key={index}
                source={{ uri: item.uri }}
                style={{ width: 100, height: 100, margin:5, borderRadius:10 }}
              />

              ))
            }
                    </View>
                  //  ))
                  
                    }

              </View>

              <Text  style={{ marginTop: 20}}>Maximum of 2 images are allowed (Images must not be more than 1.9mb)</Text>

              <Text  style={{ marginTop: 20, marginRight: 14}}>N/B: The closest available BIKE delivery agent would receive and confirm your request after which you’ll be directed to the payment page.</Text>
              {fillInDetails &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:230,padding:5, fontSize:15}}>Fill in all delivery details</Text>}
                {errorMessage ? <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:280, padding:5,  fontSize:13}}>{errorMessage}</Text> : null}
                {loading ? <Loader loadingText='wait while we pair you with an available agent around your pickup location' /> : null}
              <TouchableOpacity
              onPress={clickOnNext}
               style={styles.button} >
                   <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Proceed</Text>
               </TouchableOpacity>



          
        </View>
       </View>
     </ScrollView>
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
    marginBottom: 20
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
    calender:{
      backgroundColor: '#E7B717',
      height: 40,
      width:120,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      color: 'black',
      alignSelf: 'center',
      marginBottom: 20,
      // marginRight:10
    }

});

