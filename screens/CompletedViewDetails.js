import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Icon  } from 'react-native-elements'
import { useSelector } from "react-redux";
import { selectDeliveryMedium, selectDeliveryType, selectDestination, selectOrigin, selectTravelTimeInformation, setDeliveryDetails, selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import {useDispatch} from 'react-redux'


export default CompletedViewDetails=()=>{

    const deliveryMedium = useSelector(selectDeliveryMedium)
    const deliveryType = useSelector(selectDeliveryType)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const deliveryDetails = useSelector(selectDeliveryDetails)
    
    const userInfo = useSelector(selectUserInfo)
  
    const dispatch = useDispatch()

    const navigation = useNavigation()

    console.log(deliveryDetails.id)

    const createTwoButtonAlert = () =>
    Alert.alert('Report Delivery', 'Are you sure you want to report this delivery?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => navigation.navigate('CompletedDeliveryReport')},
    ]);

  
    // console.log(deliveryDetails)

    return(
        <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          
            <View>

            <Text  style={{margin:20, fontWeight:'bold', fontSize:16}}>{deliveryDetails.data.deliveryType} delivery : ID {deliveryDetails.data.id}</Text>

            <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

            <Image
                style={{width:72,height:72,borderRadius: 10}}
                resizeMode="cover"
                source={require('../assets/nike1.png')}
             />
               <Image
                style={{width:72,height:72,borderRadius: 10}}
                resizeMode="cover"
                source={require('../assets/nike2.png')}
             />
               <Image
                style={{width:72,height:72,borderRadius: 10}}
                resizeMode="cover"
                source={require('../assets/nike3.png')}
             />

            </View>

            <View style={{margin:20}}>

                <View style={{display:'flex',flexDirection:'row', alignItems: 'center',marginBottom:-15}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'gray', alignSelf: 'center',}} ></View>
                    </View>

                    <View style={{marginLeft:20, paddingRight: 20}}>
                    <Text>Pick up location</Text>
                    <Text>{deliveryDetails.data.pickup_name}</Text>

                     <View style={{display:'flex',flexDirection: 'row',alignItems:'center', justifyContent:"center",gap:20,marginTop:5}}>
                    <Icon
                        name='clock'
                        color='gray'
                        type='entypo'
                        size={16}
                        />

                    <Text style={{marginLeft:10}}>9:20AM</Text>
                    <Text>23,march 2024</Text>

                    </View>

                    </View>
                </View>
                    <View style={{width: 1, height:60, backgroundColor: 'black',marginLeft:15}}></View>
                <View style={{display:'flex',flexDirection:'row', alignItems: 'center',marginTop:-15}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'black', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:20, paddingRight: 20}}>
                    <Text>Drop off location</Text>
                    <Text>{deliveryDetails.data.dropoff_name}</Text>

                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center', justifyContent:"center",gap:20,marginTop:5}}>
                        <Icon
                            name='clock'
                            color='gray'
                            type='entypo'
                            size={16}
                            />

                        <Text style={{marginLeft:10}}>9:20AM</Text>
                        <Text>March 25th, 2023</Text>

                        </View>

                    </View>
                </View>

                </View>

                <Text style={{margin:15, fontSize:18}}>Delivery Details</Text>

          { deliveryDetails.locations.length !== 0 && <View  style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Image
                style={{width:118,height:118, borderRadius: 50}}
                resizeMode="contain"
                source={require('../assets/driver.png')}
             />

             <View >
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Delivery Agent : George Bush</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Vehicle Type : yamaha Bike </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Vehicle Color : Red</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Agent ID: 6789</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Plate no : LAG564OS</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Phone no : 08067919787</Text>
             </View>

            </View>}

            </View>

            <View style={{width:'80%', height:1, backgroundColor:'lightgray',alignSelf:"center",margin:10}}></View>
            
            <View style={{width:'80%',alignSelf:'center'}}>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Senders name : {deliveryDetails.data.sendersName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Senders Phone number : {deliveryDetails.data.sendersPhone} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Receivers name : {deliveryDetails.data.receiversName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Receivers Phone number: {deliveryDetails.data.phoneNumber}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Delivery Code: {deliveryDetails.data.id}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Parcel name : {deliveryDetails.data.parcelName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Parcel type : {deliveryDetails.data.parcelType}</Text>
                {/* <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Parcel description : {deliveryDetails.data.parcelDesc}</Text> */}
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Delivery Instruction : {deliveryDetails.data.deliveryInstruction} </Text>
             </View>

            <View style={{marginTop:20,alignSelf:'right', width:'100%',display:'flex', flexDirection:'row', alignItems:'flex-end',justifyContent:'space-around'}}>
            <Text>Delivery fee:</Text>
            <View style={{ borderBottomWidth: 4, borderColor: '#E7B717', borderStyle:'solid'}}>

            <Text style={{  fontSize: 20, fontWeight:'bold', borderBottomWidth: 2, borderColor: '#E7B717', borderStyle:'solid'}}>#{deliveryDetails.data.amount}</Text>

            </View>
        
            </View>

            {/* <View style={{display:'flex', flexDirection:'row',gap:20,marginTop:20, alignItems:"center", marginBottom:10, marginLeft:20}}>
            <Icon
                name='x-circle'
                color='red'
                type='feather'
                size={32}
                />
                <Text onPress={createTwoButtonAlert} style={{color:'red', fontSize: 18}}>Cancel</Text>
            </View> */}

            <TouchableOpacity onPress={createTwoButtonAlert} style={{display:'flex', flexDirection:'row',gap:20,marginTop:10, alignItems:"center", marginBottom:40, marginLeft:20}}>
            <Icon
                name='flag'
                color='red'
                type='entypo'
                size={32}
                />
                <Text style={{color:'red', fontSize: 18}}>Report this delivery</Text>
            </TouchableOpacity>


            

          <TouchableOpacity onPress={()=>navigation.navigate('CompletedReviewFeedbackScreen')} style={styles.button}>
            <Text style={{color:'goldenrod', fontWeight:'bold'}}>Leave a Review</Text>
          </TouchableOpacity>

           
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: '60%',
      color: 'black',
      alignSelf: 'center',
      marginBottom:40,
      borderColor:'goldenrod',
      borderWidth:2
    },
  
  });