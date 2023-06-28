import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {Modal, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Checkout from "../components/Checkout"
import Map from "../components/Map";
import { useSelector } from "react-redux";
import { selectDeliveryMedium, selectDeliveryType, selectDestination, selectOrigin, selectTravelTimeInformation, setDeliveryDetails, selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useState } from "react";



export default ScheduleDeliverySummary=()=>{


    const navigation = useNavigation()
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const deliveryMedium = useSelector(selectDeliveryMedium)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const deliveryType = useSelector(selectDeliveryType)
    const deliveryDetails = useSelector(selectDeliveryDetails)
    const userInfo = useSelector(selectUserInfo)
    // console.log('----',deliveryDetails)

    const [modalVisible, setModalVisible] = useState(false);

    const onClickNext=()=>{
        if(!deliveryDetails.locations.length){
            setModalVisible(true)
        }else{
            navigation.navigate('ChooseDeliveryAgent')
        }
      
    }

    console.log(userInfo.token)

    let headersList = {
      "Accept": "/",
      "Authorization": `Bearer ${userInfo.token}`
     }

    //  let reqOptions = {
    //   url: `https://ryder-app-production.up.railway.app/api/user/deliveries?deliveryType=admin`,
    //   method: "PUT",
    //   headers: headersList,
      
    // }

    const handleAdminSchedule =async()=>{
      try {
        const { data } = await axios({
            method: 'put',
            url: `https://ryder-app-production.up.railway.app/api/user/deliveries/${deliveryDetails.data.id}`,
            data: {
                deliveryType: 'admin',
            },
            headers:headersList
        });
    
        console.log('------deliveryType update',data);
        setModalVisible(false)
          navigation.navigate('Payment Options')
    } catch (err) {
      console.log(err.response)
        // if (err.response.status === 404) {
        //     console.log('Resource could not be found!');
        // } else {
        //     console.log(err.message);
        // }
    }
    }

    console.log('---=====----', deliveryDetails)
    return(
        <ScrollView>
        <View style={{backgroundColor: 'white'}}>

            {/* <Checkout /> */}

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
            <View>
            {/* <Image
                style={{width:"100%",height:300}}
                resizeMode="cover"
                source={require('../assets/map2.png')}
             /> */}
             <View  style={{width:"100%",height:300}}>

             <Map />

             </View>
{/*           
            <Text  style={{margin:20, fontWeight:'bold', fontSize:16}}>Request accepted by:</Text>
            <View  style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Image
                style={{width:118,height:118, borderRadius: 50}}
                resizeMode="contain"
                source={require('../assets/driver.png')}
             />

             <View >
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:"normal"}}>Delivery Agent : George Bush</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:"normal"}}>Vehicle Type : yamaha Bike </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:"normal"}}>Vehicle Color : Red</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:"normal"}}>Agent ID: 6789</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:"normal"}}>Plate no : LAG564OS</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:"normal"}}>Phone no : 08067919787</Text>
             </View> */}

            {/* </View> */}

            <View style={{width:'90%', height: 2, backgroundColor: 'gray', margin:20, alignSelf:'center'}}></View>
            <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{paddingLeft:20,fontSize: 15}}>Estimated Time to Pickup location</Text>
                <Text style={{color:'#E7B717',paddingRight:20, fontSize:15}}>10minutes</Text>
            </View>
            <View style={{width:'90%', height: 2, backgroundColor: 'gray', margin:20, alignSelf:'center'}}></View>


            </View>
            
            <View style={{width:'80%',alignSelf:'center'}}>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Senders name : {deliveryDetails.data.sendersName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Senders Phone number : +234 {deliveryDetails.data.sendersPhone} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Receivers name : {deliveryDetails.data.receiversName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Receivers Phone number: +234 {deliveryDetails.data.receiversPhone}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Delivery Code: {deliveryDetails.data.id}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Parcel name : {deliveryDetails.data.parcelName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Parcel type : {deliveryDetails.data.parcelType}</Text>
                {/* <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Parcel description : {deliveryDetails.data.parcelDesc}</Text> */}
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Delivery Instruction : {deliveryDetails.data.deliveryInstruction} </Text>
             </View>

             <View style={{margin:15, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>Schedule delivery date/time</Text>
                <View>
                    <Text style={{padding:20, backgroundColor:'lightgray',margin:5,fontSize:15}}>{deliveryDetails.data.pickup_date}</Text>
                    <Text style={{padding:20, backgroundColor:'lightgray',margin:5,fontSize:15}}>{deliveryDetails.data.pickup_time}</Text>
                </View>
             </View>

            <View style={{marginTop:20,alignSelf:'right', width:'100%',display:'flex', flexDirection:'row', alignItems:'flex-end',justifyContent:'space-around'}}>
            <Text>Delivery fee:</Text>
            <View style={{ borderBottomWidth: 4, borderColor: '#E7B717', borderStyle:'solid'}}>

            <Text style={{  fontSize: 20, fontWeight:'bold', borderBottomWidth: 2, borderColor: '#E7B717', borderStyle:'solid'}}>{deliveryDetails.data.amount}</Text>

            </View>
        
            </View>
             <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold', margin:20,paddingTop:20}}>Image:</Text>

             <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',flexWrap:'wrap'}}>
             <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri: deliveryDetails.parcelImages[0]?.url}}
             />
              <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri: deliveryDetails.parcelImages[1]?.url}}
             />
             
             </View>

             <View style={{margin:20}}>

                <View style={{display:'flex',flexDirection:'row', alignItems: 'center',}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'gray', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:35, paddingRight: 20 }}>
                    <Text>Pick up location</Text>
                    <Text>{deliveryDetails.data.pickup_name}</Text>
                    </View>
                </View>
                    <View style={{width: 1, height:40, backgroundColor: 'black',marginLeft:15}}></View>
                <View style={{display:'flex',flexDirection:'row', alignItems: 'center', }}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'black', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:35, paddingRight: 20}}>
                    <Text>Drop off location</Text>
                    <Text>{deliveryDetails.data.dropoff_name}</Text>
                    </View>
                </View>

             </View>

             
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
            style={{width:"60%", height: "45%", resizeMode: 'contain', marginBottom:-40,}}
            source={require('../assets/fast.png')}
            />
            <Text style={styles.modalTextBold}>Oops! No delivery agent available around your location</Text>
            <Text style={styles.modalText}>Schedule your delivery with our admin instead</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleAdminSchedule}>
              <Text style={styles.textStyle}>Schedule with admin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> 

             <TouchableOpacity
                onPress={onClickNext}
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
      marginBottom:40
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      width:'100%',
      backdropFilter: 'blur(10px)'
     
    },
    modalView: {
      display:'flex',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
      alignSelf:'center',
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
      backgroundColor: '#E7B717',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: '80%',
      marginBottom:20
    },
    buttonClose: {
      backgroundColor: '#E7B717',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: '80%',
      marginBottom:40
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalTextBold: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight:'bold',
      fontSize:18
    },
  
  });