import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'



export default ScheduleDeliveryFeedback=()=>{
  

    const navigation = useNavigation()
    
    return(
    
        <View style={{backgroundColor: 'white',height:'100%'}}>

        <Image
          style={{width:"100%",height:'67%'}}
          resizeMode="cover"
          source={require('../assets/map.png')}
        />

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
                <Text style={{color:'gray', textAlign:'center',fontSize:16}}>Your delivery has been scheduled</Text>
             
            </View>
         </View>



        

         <View style={{display:'flex', flexDirection:'row', alignItems:'flex-start',
         justifyContent: 'center',gap:5, alignSelf: 'flex-start'}}>
                    <Text style={{color:'gray'}}>4.5</Text>
                    <Icon
      
                 name='star'
                 color='gray'
                 type='antdesign'
                 size={16}
                 />
            <Text style={{color:'gray', }}>56 Deliveries</Text>
                </View>

                <View style={{display:'flex', flexDirection:'row', alignItems:'center',
         justifyContent: 'space-between',margin:10 }}>
                    <Text style={{color:'gray'}}>Pick up date and time</Text>
                    <Text style={{color:'#E7B717'}}>23/03/23</Text>
                    <Text style={{color:'#E7B717'}}>3:00PM</Text>
                </View>


          <TouchableOpacity
                onPress={() => navigation.navigate('Payment Options')}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>Proceed to payment</Text>
                 </TouchableOpacity>

         {/* </View> */}



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
  
  });