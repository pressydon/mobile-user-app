import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Reviews from "../components/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../slices/authSlice";
import { selectDeliveryDetails } from "../slices/navSlice";
import axios from "axios";
import Loader from '../components/Loader'
import { useState } from "react";



export default ChooseDeliveryAgentFromAgents=()=>{

    const navigation =useNavigation()
    const userInfo = useSelector(selectUserInfo)
    const deliveryDetails = useSelector(selectDeliveryDetails)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const route = useRoute()

    let headersList = {
        "Accept": "/",
        "Authorization": `Bearer ${userInfo.token}`
       }
  

      const handleAdminSchedule =async()=>{
            setLoading(true)
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
            navigation.navigate('Payment Options')

            setLoading(false)
      } catch (err) {
        console.log(err.response)
          // if (err.response.status === 404) {
          //     console.log('Resource could not be found!');
          // } else {
          //     console.log(err.message);
          // }
      }
      }
  
      const handleSchedule =async()=>{

        setLoading(true)
          try {
            const { data } = await axios({
                method: 'put',
                url: `https://ryder-app-production.up.railway.app/api/user/deliveries/${deliveryDetails.data.id}`,
                data: {
                    initialMatch: route.params.item.driver_id,
                },
                headers:headersList
            });
        
            console.log('------schedule update',data);
              navigation.navigate('Payment Options')

              setLoading(false)
        } catch (err) {
          console.log(err.response)
            // if (err.response.status === 404) {
            //     console.log('Resource could not be found!');
            // } else {
            //     console.log(err.message);
            // }
        }
        }

    return(
        <View>

            <Icon
            onPress={() => navigation.goBack(null)}
             style={tw` p-3 w-10 mt-7`}
             name='left'
             color='black'
             type='antdesign'
              />

            <View  style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Image
                style={{width:118,height:118, borderRadius: 50}}
                resizeMode="cover"
                source={{ uri: route.params.item.img ? route.params.item.img  :  'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'}} 
             />

             <View >
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Delivery Agent : {route.params.item.name}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Vehicle Type : {route.params.item.vehicleType} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Vehicle Color : Red</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>delivery medium: {route.params.item.medium}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Agent ID: {route.params.item.driver_id}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Plate no : LAG564OS</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:'normal'}}>Phone no : {route.params.item.phoneNumber}</Text>
             </View>

            </View>

            <View style={{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'60%', alignSelf:'center',marginTop: 20}}>
                <View style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text  style={{fontSize:18,marginBottom:5}}>Rating</Text>
                    <View style={{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', gap:5}}>
                        <Text>{route.params.item.rate}</Text>
                        <Icon
                    
                        name='star'
                        color='goldenrod'
                        type='antdesign'
                        size={16}
                      />
                    </View>
                </View>

                <View  style={{display: 'flex', alignItems:'center', justifyContent:'center',}}>
                    <Text style={{fontSize:18,marginBottom:5}}>Deliveries</Text>
                    <Text>191</Text>
                </View>
            </View>

            {/* <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

            <Image
                style={{width:80,height:80, borderRadius: 15}}
                resizeMode="contain"
                source={require('../assets/chooseImage1.png')}
             />
              <Image
                style={{width:80,height:80, borderRadius: 15}}
                resizeMode="contain"
                source={require('../assets/chooseImage2.png')}
             />
              <Image
                style={{width:80,height:80, borderRadius: 15}}
                resizeMode="contain"
                source={require('../assets/chooseImage3.png')}
             />
              <Image
                style={{width:80,height:80, borderRadius: 15}}
                resizeMode="contain"
                source={require('../assets/chooseImage4.png')}
             />

            </View> */}

            <TouchableOpacity
                onPress={handleSchedule}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>Continue with this agent</Text>
                 </TouchableOpacity>

                 <View style={{width:'80%', height:0.2, backgroundColor:'black',alignSelf:'center'}}></View>

            {/* <Text style={{margin:10, fontWeight:'bold'}}>Reviews</Text> */}

            {/* <Reviews />
            <Reviews /> */}

            {loading ? <Loader /> : null}

            <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ChooseAnotherDeliveryAgent')}
                 style={styles.buttonCall} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>Choose another agent</Text>
                 </TouchableOpacity>

                 <TouchableOpacity
                onPress={handleAdminSchedule}
                 style={styles.buttonCall} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>Schedule with admin</Text>
                 </TouchableOpacity>

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
      marginBottom:20
    },
    buttonCall: {
        backgroundColor: '#E7B717',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: '40%',
        color: 'black',
        alignSelf: 'center',
        marginBottom:40
      },
  
  });