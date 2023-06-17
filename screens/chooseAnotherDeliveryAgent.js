import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Reviews from "../components/Reviews";
import { useSelector } from "react-redux";
import { selectDeliveryDetails } from "../slices/navSlice";
import { useEffect, useState } from "react";

//   const data = [
//     {
//         id: 1,
//         image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Aliko Dangote',
//         vehicleType: 'Benz',
//         rate: 5
//     },
//     {
//         id: 2,
//         image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Obi Peter',
//         vehicleType: 'Corolla',
//         rate: 2
//     },
//     {
//         id: 3,
//         image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Beyonce Knowles',
//         vehicleType: 'Bentley',
//         rate: 3,
//     },
//     {
//         id: 4,
//         image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Matthias Rayburn',
//         vehicleType: 'Royce Baby',
//         rate: 5
//     },
//     {
//         id: 5,
//         image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'John Cena',
//         vehicleType: 'Venza',
//         rate: 4
//     },
//     {
//         id: 6,
//         image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Bruno Fucking Fernandes',
//         vehicleType: 'Benz',
//         rate: 5
//     },
//     {
//         id: 7,
//         image: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Jeff Bezos',
//         vehicleType: 'Maybach',
//         rate: 1
//     },
//     {
//         id: 8,
//         image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Serena Williams',
//         vehicleType: 'Peugeot',
//         rate: 3
//     },
//     {
//         id: 9,
//         image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'James Cordon',
//         vehicleType: 'Honda',
//         rate: 5
//     },
//     {
//         id: 10,
//         image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         name:'Mr Delivery',
//         vehicleType: 'Suv',
//         rate: 5
//     },
//   ]

export default ChooseAnotherDeliveryAgent=()=>{

    const navigation =useNavigation()
    const deliveryDetails = useSelector(selectDeliveryDetails)

    const [data, setData] =useState([])

    useEffect(()=>{

        setData(deliveryDetails.locations)

    }, [])

   

  console.log('---', data)

    return(
        <View style={{marginBottom:60,backgroundColor: 'rgba(211, 211, 211,0.1)'}}>

            <Icon
            onPress={() => navigation.goBack(null)}
             style={tw` p-3 w-10 mt-7`}
             name='left'
             color='black'
             type='antdesign'
              />
              <Text style={{fontSize:23, fontWeight:600,margin:10}}>choose another agent</Text>

              <FlatList
                  style={styles.content}
                   data={data}
                  keyExtractor={(item) => item.driver_id}
                // horizontal
                 renderItem={({item})=>(
                 <TouchableOpacity
                      style={styles.item}
                onPress={()=> navigation.navigate('ChooseDeliveryAgentFromAgents', {item: item})}
                  >
                  <View style={{display:'flex',flexDirection:'row',alignItems:"center", justifyContent:"space-between",marginTop:10,marginLeft:20,marginRight:40}}>
             
               <Image
                 style={{width: 60, height: 60, resizeMode:'cover', borderRadius:50}}
                source={{ uri: item.img}} 
             />
             <View style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
             <Text  style={{ fontSize:20, fontWeight:600,}} >{item.name}</Text>
             <Text  style={styles.amount}>Vehicle name: {item.medium}</Text>
             </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:"center", justifyContent:"space-between",margin:10}}>
                <View style={{display:'flex',flexDirection:'row',alignItems:"center", justifyContent:"center",gap:5,marginLeft:10}}>
                    {/* <Text style={{fontSize: 18, color:'#E7B717'}}>{item.rate}</Text> */}
                    <Icon
                        name='star'
                        color='#E7B717'
                        type='antdesign'
                        size={20}
                     />
                </View>
                <Icon
             name='arrowright'
             color='#E7B717'
             type='antdesign'
             size={32}
              />
            </View>
           
        </TouchableOpacity>
    )}
      />


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
      item:{
        backgroundColor:'white',
        margin:15,
        borderRadius:10,
        height:120
      }
  
  });