import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"




export default PendingDeliveriesViewDetails=()=>{

    const navigation = useNavigation()

    return(
        <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          
            <View>
            <Image
                style={{width:"100%",height:300}}
                resizeMode="cover"
                source={require('../assets/map2.png')}
             />
            <Text  style={{margin:20, fontWeight:500, fontSize:16}}>Request accepted by:</Text>
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
             <Text style={{fontSize:14,lineHeight: 24,fontWeight:500, margin:20,paddingTop:20}}>Image:</Text>

             <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',flexWrap:'wrap'}}>
             <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={require('../assets/nike1.png')}
             />
              <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={require('../assets/nike2.png')}
             />
              <Image
                style={{width:82,height:71, borderRadius: 10}}
                resizeMode="cover"
                source={require('../assets/nike3.png')}
             />
             </View>

             <View style={{margin:20}}>

                <View style={{display:'flex',flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'gray', alignSelf: 'center',}} ></View>
                    </View>
                    <View>
                    <Text>Pick up location</Text>
                    <Text>5 Amagba street, off Sapele road Benin city</Text>
                    </View>
                </View>
                    <View style={{width: 1, height:40, backgroundColor: 'black',marginLeft:15}}></View>
                <View style={{display:'flex',flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
                    <View style={{width: 30, height: 30, borderRadius: 50, borderColor: 'black', borderWidth: 1,paddingTop:4 }} >
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'black', alignSelf: 'center',}} ></View>
                    </View>
                    <View style={{marginLeft:35, paddingRight: 20}}>
                    <Text>Drop off location</Text>
                    <Text>12 federal road, beside UBTH Ugbowo Benin city</Text>
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
  
  });