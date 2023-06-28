import { useNavigation } from "@react-navigation/native";
import { useState,useCallback } from "react";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View, Linking, Modal, Alert } from "react-native"
import { useSelector } from "react-redux";
import {  Icon } from 'react-native-elements'





export default PendingDeliveriesViewDetails=({route})=>{

  
    const [modalVisible, setModalVisible] = useState(false);

    const supportedURL = 'tel:+2348067919787';
    console.log('----',)
    const {item} = route.params

    const navigation = useNavigation()

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(supportedURL);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(supportedURL);
          setModalVisible(!modalVisible)
        } 
     
      }, [supportedURL]);



    return(
        <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          
            <View>
            <Image
                style={{width:"100%",height:300}}
                resizeMode="cover"
                source={require('../assets/map2.png')}
             />
            <Text  style={{margin:20, fontWeight:'bold', fontSize:16}}>Request accepted by:</Text>
            <View  style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Image
                style={{width:118,height:118, borderRadius: 50}}
                resizeMode="contain"
                source={require('../assets/driver.png')}
             />

             <View >
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Delivery Agent : George Bush</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Vehicle Type : yamaha Bike </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Vehicle Color : Red</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Agent ID: 6789</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Plate no : LAG564OS</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Phone no : 08067919787</Text>
             </View>

            </View>

            </View>
            
            <View style={{width:'80%',alignSelf:'center'}}>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Senders name : {item.sendersName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Senders Phone number : {item.sendersPhone} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Receivers name : {item.receiversName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Receivers Phone number: {item.receiversPhone}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Delivery Code: {item.id}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Parcel name : {item.parcelName}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Parcel type : {item.parcelType}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'bold'}}>Delivery Instruction : {item.deliveryInstruction} </Text>
             </View>

             <View style={{width:'80%',alignSelf:'center', display:"flex",flexDirection:'row', alignItems:'center',justifyContent:"space-between",marginTop:-15}}>
                <Text style={{fontSize:15}}>Senders Contact: +234{item.sendersPhone}</Text>
                <TouchableOpacity
                        // onPress={() => navigation.navigate('InstantDeliveryInput')}
                        onPress={() => setModalVisible(true)}
                            style={styles.buttonCall} >
                                
                                    <Icon
                                style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                                name='telephone'
                                color='#E7B717'
                                type='foundation'
                                size={18}
                                />
                        
                            </TouchableOpacity>

                            {/* implement call modal */}

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
                        <TouchableOpacity    onPress={() =>{ navigation.navigate('CallNumber'),setModalVisible(!modalVisible)}} style={{width:'100%',backgroundColor:'gray',padding:10, display:'flex', flexDirection:'row',gap:20, margin:10 }}>
                        <Icon
                                style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                                name='telephone'
                                color='#E7B717'
                                type='foundation'
                                size={22}
                                />
                        <Text style={styles.modalText}>Call on App</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handlePress} style={{width:'100%',backgroundColor:'gray',padding:10, display:'flex', flexDirection:'row',gap:20 ,margin:10}}>

                          <Icon
                                style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                                name='telephone'
                                color='#E7B717'
                                type='foundation'
                                size={22}
                                />

                            <View>
                            <Text style={styles.modalText}>Call on Mobile</Text>
                        <Text style={{color:'lightgray', fontWeight:'bold'}}>+234{item.sendersPhone}</Text>

                            </View>

                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
                {/* modal ilementation ends */}

                            <TouchableOpacity
                              onPress={() => navigation.navigate('ChatBox',{item})}
                              style={styles.buttonCall} >
                                
                                    <Icon
                                style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                                name='message1'
                                color='#E7B717'
                                type='antdesign'
                                size={18}
                                />
                        
                            </TouchableOpacity>

                </View>

            <View style={{marginTop:20,alignSelf:'right', width:'100%',display:'flex', flexDirection:'row', alignItems:'flex-end',justifyContent:'space-around'}}>
            <Text>Delivery fee:</Text>
            <View style={{ borderBottomWidth: 4, borderColor: '#E7B717', borderStyle:'solid'}}>

            <Text style={{  fontSize: 20, fontWeight:'bold', borderBottomWidth: 2, borderColor: '#E7B717', borderStyle:'solid'}}>#{item.amount}</Text>

            </View>
        
            </View>
             <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal', margin:20,paddingTop:20}}>Image:</Text>

             {/* <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',flexWrap:'wrap'}}>
             <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri: item?.parcelImages[0].url}}
             />
              <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={{uri:item?.parcelImages[1].url}}
             />
            
             </View> */}

             <View style={{margin:20}}>

                <View style={{display:'flex',flexDirection:'row', alignItems: 'center'}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'gray', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:40,marginRight: 20}}>
                    <Text>Pick up location</Text>
                    <Text>{item.pickup_name}</Text>
                    </View>
                </View>
                    <View style={{width: 1, height:40, backgroundColor: 'black',marginLeft:15}}></View>
                <View style={{display:'flex',flexDirection:'row', alignItems: 'center'}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'black', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:40, paddingRight: 20}}>
                    <Text>Drop off location</Text>
                    <Text>{item.dropoff_name}</Text>
                    </View>
                </View>

             </View>

             <View
                // onPress={() => navigation.navigate('Payment Options')}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>Arrives drop off location in 10mins</Text>
                 </View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: 'lightgray',
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
  
    buttonCall: {
        backgroundColor: 'black',
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: 30,
        color: 'black',
        alignSelf: 'center',
        marginBottom:20
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
        fontSize:20,
        fontWeight:'bold'
      },
  });