import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Reviews from "../components/Reviews";



export default ChooseDeliveryAgentFromAgents=()=>{

    const navigation =useNavigation()

    const route = useRoute()

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
                source={{ uri: route.params.item.image}} 
             />

             <View >
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Delivery Agent : {route.params.item.name}</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Vehicle Type : {route.params.item.vehicleType} </Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Vehicle Color : Red</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Agent ID: 6789</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Plate no : LAG564OS</Text>
                <Text style={{fontSize:14,lineHeight: 24,fontWeight:400}}>Phone no : 08067919787</Text>
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

            <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

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

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Payment Options')}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>Continue with this agent</Text>
                 </TouchableOpacity>

                 <View style={{width:'80%', height:0.2, backgroundColor:'black',alignSelf:'center'}}></View>

            <Text style={{margin:10, fontWeight:500}}>Reviews</Text>

            <Reviews />
            <Reviews />

            <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ChooseAnotherDeliveryAgent')}
                 style={styles.buttonCall} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>Choose another agent</Text>
                 </TouchableOpacity>

                 <TouchableOpacity
                onPress={() => navigation.navigate('Payment Options')}
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