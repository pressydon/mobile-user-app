import { useState, useCallback } from "react";
import { StyleSheet,Linking, Modal } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Map from "../components/Map";



export default InstantDeliveryArriving=()=>{
  

    const navigation = useNavigation()

    const [modalVisible, setModalVisible] = useState(false);

    const supportedURL = 'tel:+2348067919787';
    const unsupportedURL = 'slack://open?team=123456';

    
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
    
        <View style={{backgroundColor: 'white',height:'100%'}}>

        {/* <Image
          style={{width:"100%",height:'67%'}}
          resizeMode="cover"
          source={require('../assets/map.png')}
        /> */}
        <View style={{height:'67%'}}>
          <Map />
        </View>

        <View style={{padding:20, backgroundColor:'black', borderTopLeftRadius:30, borderTopRightRadius:30}}>

      

         <View style={{display:'flex', flexDirection:'row', alignItems:'center',
        justifyContent: 'space-between', padding:20}}>
         <Avatar
                size={50}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <View>
                <Text style={{color:'white', fontSize:20, alignSelf:'flex-end'}}>Daniel Musa</Text>

                <View style={{display:'flex', flexDirection:'row', alignItems:'center',
        justifyContent: 'space-between',gap:5}}>
                    <Text style={{color:'gray'}}>4.5</Text>
                    <Icon
             name='star'
             color='gray'
             type='antdesign'
             size={16}
          />
            <Text style={{color:'gray', }}>56 Deliveries</Text>
                </View>
            </View>
         </View>



         <Text style={{color:'gray', textAlign:'center',fontSize:16}}>Arriving in 10 minutes</Text>



         <View style={{display:'flex', flexDirection:'row', alignItems:'center',
        justifyContent: 'space-between', padding:20, marginBottom:20}}>

                <TouchableOpacity
                 onPress={() => setModalVisible(true)}
                 style={styles.buttonCall} >
                     
                            <Icon
                        style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                       name='telephone'
                      color='black'
                      type='foundation'
                      size={32}
                        />
                
                 </TouchableOpacity>


          <TouchableOpacity
                onPress={() => navigation.navigate('ChatBox')}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>Want to send a message?</Text>
                 </TouchableOpacity>

         </View>



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
                        <Text style={{color:'lightgray', fontWeight:500}}>+2348067919787</Text>

                            </View>

                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
                {/* moal ilementation ends */}




         </View>
         
        </View>
       
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#E7B717',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      width: '70%',
      color: 'black',
      alignSelf: 'center',
      marginBottom:40
    },
    buttonCall: {
        backgroundColor: '#E7B717',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: 50,
        color: 'black',
        alignSelf: 'center',
        marginBottom:40
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
        fontWeight:500
      },
  });