import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Checkout from "../components/Checkout"
import Map from "../components/Map";
import { useSelector } from "react-redux";
import { selectDeliveryMedium, selectDeliveryType, selectDestination, selectOrigin, selectTravelTimeInformation, setDeliveryDetails, selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import {useDispatch} from 'react-redux'

const SURGE_CHARGE_RATE = 1.5;

export default DeliverySummary=()=>{

    const navigation = useNavigation()
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const deliveryMedium = useSelector(selectDeliveryMedium)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const deliveryType = useSelector(selectDeliveryType)
    const deliveryDetails = useSelector(selectDeliveryDetails)

    // console.log(deliveryDetails)
    // console.log(travelTimeInformation.distance.text)
    // console.log(deliveryMedium)
    // console.log(origin)

    const parcelImages = deliveryDetails.parcelImages

    console.log(parcelImages)

    return(
        <ScrollView>
        <View style={{backgroundColor: 'white', paddingBottom:40, height:'100%'}}>
            {/* <Checkout /> */}
            {/* checkout starts */}

            <View style={{display:'flex', flexDirection: 'row',alignItems: "center", justifyContent:'center',margin:20}}>

<View>
    <View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'black', }}>
    <Text style={[{ color: 'white', textAlign:'center'}]}>1</Text>
    </View>
  
    <Text style={{marginLeft:-30, fontSize: 12}}>Delivery details</Text>
</View>
<View style={{width: 120,height:2,backgroundColor: 'black', marginLeft: -40, marginBottom:18}}></View>

<View>
<View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'goldenrod', }}>
    <Text style={[{ color: 'white', textAlign:'center'}]}>2</Text>
    </View>
    <Text style={{marginLeft:-30, fontSize: 12}}>Delivery summary</Text>
</View>
<View style={{width: 130,height:2,backgroundColor: 'black', marginLeft: -50, marginBottom:18}}></View>

<View>
<View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'black', }}>
    <Text style={[{ color: 'white', textAlign:'center'}]}>3</Text>
    </View>
    <Text style={{marginLeft:-20, fontSize: 12}}>Payment</Text>
</View>

</View>

            {/* checkout ends */}
            <View style={{height:700}}>
            {/* <Image
                style={{width:"100%",height:300}}
                resizeMode="cover"
                source={require('../assets/map2.png')}
             /> */}
             <Map />
             <View style={{display:'flex', flexDirection:'row',gap:10, alignItems:'center',justifyContent:'center'}}>

             <Text style={{textAlign: "right", padding:10, fontSize:13,fontWeight:'bold', backgroundColor:'lightgray',width:150,display:"flex",alignSelf:'flex-end', }}>Distance between delivery - {travelTimeInformation?.distance?.text}</Text>
             <Text style={{textAlign: "right", padding:10, fontSize:13, fontWeight:'bold', backgroundColor:'goldenrod',width:150,display:"flex",alignSelf:'flex-end', }}>Delivery Time - {travelTimeInformation?.duration?.text}</Text>

             </View>

            <Text  style={{margin:20, fontWeight:'bold', fontSize:16}}>Request accepted by:</Text>
            <View  style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
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

            </View>

            <View style={{width:'90%', height: 2, backgroundColor: 'gray', margin:20, alignSelf:'center'}}></View>
            <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{paddingLeft:20,fontSize: 15}}>Estimated Time to Pickup location</Text>
                <Text style={{color:'#E7B717',paddingRight:20, fontSize:15}}>10minutes</Text>
            </View>
            <View style={{width:'90%', height: 2, backgroundColor: 'gray', margin:20, alignSelf:'center'}}></View>


            </View>
            
            <View style={{width:'80%',alignSelf:'center'}}>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Senders name : {deliveryDetails.data.sendersName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Senders Phone number : {deliveryDetails.data.sendersPhone} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Receivers name : {deliveryDetails.data.receiversName} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Receivers Phone number: {deliveryDetails.data.receiversPhone} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Delivery Code: {deliveryDetails.data.id} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Parcel name : {deliveryDetails.data.parcelName} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Parcel type : {deliveryDetails.data.parcelType} </Text>
                {/* <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Parcel description : A new pair of brown nike boots</Text> */}
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Delivery Instruction : {deliveryDetails.data.deliveryInstruction}  </Text>
             </View>

            <View style={{marginTop:20,alignSelf:'right', width:'100%',display:'flex', flexDirection:'row', alignItems:'flex-end',justifyContent:'space-around'}}>
            <Text>Delivery fee:</Text>
            <View style={{ borderBottomWidth: 4, borderColor: '#E7B717', borderStyle:'solid'}}>

            <Text style={{  fontSize: 20, fontWeight:'bold', borderBottomWidth: 2, borderColor: '#E7B717', borderStyle:'solid'}}>
                {new Intl.NumberFormat('en-gb',{
                    style:'currency',
                    currency:'NGN'
                }).format(

                  deliveryDetails.data.amount

                )}
            </Text>

            </View>
        
            </View>
             <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal', margin:20,paddingTop:20}}>Image:</Text>

             <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',flexWrap:'wrap'}}>
                
             <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri: parcelImages[0]?.url}}
             />
               <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri: parcelImages[1]?.url}}
             />
              {/* <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri: parcelImages[2]?.url}}
             />  */}
             </View>

             <View style={{margin:20}}>

                <View style={{display:'flex',flexDirection:'row', alignItems: 'center', gap:20}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'gray', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:5, paddingRight: 20, width:'80%'}}>
                    <Text>Pick up location</Text>
                    <Text>{origin.description}</Text>
                    </View>
                </View>
                    <View style={{width: 1, height:40, backgroundColor: 'black',marginLeft:15}}></View>
                <View style={{display:'flex',flexDirection:'row', alignItems: 'center', gap:20}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'black', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:5, paddingRight: 20, width:'80%'}}>
                    <Text>Drop off location</Text>
                    <Text>{destination.description}</Text>
                    </View>
                </View>

             </View>

             <TouchableOpacity
                onPress={() => navigation.navigate('Payment Options')}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Proceed</Text>
                 </TouchableOpacity>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
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
      marginBottom:50
    },
  
  });