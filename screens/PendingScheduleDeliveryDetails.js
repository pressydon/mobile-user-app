import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Icon  } from 'react-native-elements'



export default PendingScheduleDeliveryDetails=()=>{

    const navigation = useNavigation()

    const createTwoButtonAlert = () =>
    Alert.alert('Cancel Delivery Booking', 'Are you sure you want to cancel this delivery booking?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => navigation.navigate('PendingCancelScreen')},
    ]);

  

    return(
        <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          
            <View>

            <Text  style={{margin:20, fontWeight:500, fontSize:16}}>Scheduled delivery : ID 897653</Text>

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
                <Text style={{margin:10, fontSize:18, fontWeight:500}}>Delivery Status</Text>

        <View style={{display:'flex',flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
            <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
            <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'goldenrod', alignSelf: 'center',}} ></View>
            </View>
            <View>
            <Text>Scheduled delivery pick up time and date</Text>

            <View style={{display:'flex',flexDirection: 'row',alignItems:'center', justifyContent:"center",gap:20,marginTop:5}}>
            <Icon
                name='clock'
                color='gray'
                type='entypo'
                size={16}
                />

            <Text style={{marginLeft:-10}}>9:20AM</Text>
            <Text>March 25th, 2023</Text>

            </View>
        
            </View>
        </View>
        
</View>

            <View  style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Image
                style={{width:118,height:118, borderRadius: 50}}
                resizeMode="contain"
                source={require('../assets/driver.png')}
             />

             <View >
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Delivery Agent : George Bush</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Vehicle Type : yamaha Bike </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Vehicle Color : Red</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Agent ID: 6789</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Plate no : LAG564OS</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Phone no : 08067919787</Text>
             </View>

            </View>

            </View>
            
            <View style={{width:'80%',alignSelf:'center'}}>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Senders name : Ryan Reynolds</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Senders Phone nymber : 08123445556 </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Receivers name : kate winslet</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Receivers Phone number: 080228883399</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Delivery Code: 12345</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Parcel name : Nike shoes</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Parcel type : Non-fragile</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Parcel description : A new pair of brown nike boots</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:500}}>Delivery Instruction : I need the parcel to be opened by the receiver </Text>
             </View>

            <View style={{marginTop:20,alignSelf:'right', width:'100%',display:'flex', flexDirection:'row', alignItems:'flex-end',justifyContent:'space-around'}}>
            <Text>Delivery fee:</Text>
            <View style={{ borderBottomWidth: 4, borderColor: '#E7B717', borderStyle:'solid'}}>

            <Text style={{  fontSize: 20, fontWeight:600, borderBottomWidth: 2, borderColor: '#E7B717', borderStyle:'solid'}}>#1,500</Text>

            </View>
        
            </View>

            <View style={{display:'flex', flexDirection:'row',gap:20,marginTop:20, alignItems:"center", marginBottom:10, marginLeft:20}}>
            <Icon
                name='x-circle'
                color='red'
                type='feather'
                size={32}
                />
                <Text onPress={createTwoButtonAlert} style={{color:'red', fontSize: 18}}>Cancel</Text>
            </View>

            <View style={{display:'flex', flexDirection:'row',gap:20,marginTop:10, alignItems:"center", marginBottom:40, marginLeft:20}}>
            <Icon
                name='flag'
                color='red'
                type='entypo'
                size={32}
                />
                <Text style={{color:'red', fontSize: 18}}>Report this delivery</Text>
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
  
  });