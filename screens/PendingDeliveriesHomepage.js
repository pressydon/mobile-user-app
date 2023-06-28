import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, withBadge } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import HomeNavBottom from '../components/HomeNavBottom';
import { useContext, useEffect } from 'react';
import { setAllDeliveries,selectAllDeliveries } from '../slices/deliveries';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '../slices/authSlice';
import axios from 'axios';



export default function PendingDeliveriesHomepage() {

    const navigation = useNavigation()
    // const deliveries = useContext(setAllDeliveries)
    const userInfo = useSelector(selectUserInfo)
    const allDeliveries = useSelector(selectAllDeliveries)
    const dispatch = useDispatch()



    useEffect(()=>{
        const fetchAllAgentsDeliveries=async()=>{

            try {

                const allDeliveries =    await axios.get(`https://ryder-app-production.up.railway.app/api/user/deliveries`, {
                    headers: {
                      "Authorization": `Bearer ${userInfo.token}`,
                    },
                  });
        
                //   console.log(allDeliveries.data.deliveries)
                  dispatch(setAllDeliveries(allDeliveries.data.deliveries))
            } catch (error) {
                console.error(error)
            }
         
        }


        fetchAllAgentsDeliveries()
    },[])

    console.log(allDeliveries)

 
  return ( <SafeAreaView style={styles.pendingContainer}>
      
            <View style={{width:'100%', height:'25%', backgroundColor:'black'}}>

                <Text style={{color:'white', paddingTop:50,paddingLeft:20, fontWeight:'bold',fontSize:18}}>Pending Deliveries</Text>

            </View>

            <View style={{height: '73%', marginTop:-50}}>

                
       {   allDeliveries.length 
                 ?    <FlatList
                                style={styles.content}
                                data={allDeliveries}
                                keyExtractor={(item) => item.id}
                                // horizontal
                                renderItem={({item})=>(
                                <TouchableOpacity
                                    style={styles.item}
                                onPress={()=> navigation.navigate('PendingDeliveriesViewDetails', {item: item})}
                                >
                                <View style={{display:'flex',flexDirection:'row',alignItems:"center", justifyContent:"space-between",marginTop:10,marginLeft:20,marginRight:40}}>
                            
                            <Image
                                style={{width: 70, height: 50, resizeMode:'cover', }}
                                source={{ uri: item.img ? item.img : 'https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'}} 
                            />
                            <View style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                            <Text  style={{ fontSize:20, fontWeight:'bold',}} >{item.parcelName}</Text>
                            <Text  >Delivery Id: {item.id}</Text>
                            </View>

                            </View>

                        <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:'goldenrod',padding:5, borderRadius:5}} >
                            <Text>View Details</Text>
                        </TouchableOpacity>
                        </TouchableOpacity>
                                )}
                                />
                                :
                                <View style={{display:'flex', alignItems:'center', justifyContent:'center',alignSelf:'center'}}> 

                                <Image
                                     style={{width: 300, height: 200, resizeMode:'cover',marginTop:70 }}
                                     source={require('../assets/emptyPending.png')}
                                 />
                                 <Text style={{fontSize:20}}>No Pending Deliveries</Text>
                    
                           </View>
                     }



            </View>

        
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', backgroundColor: 'black', paddingTop:20, paddingBottom:30, paddingRight:20, paddingLeft: 30 }}>

<TouchableOpacity onPress={()=>navigation.navigate('Homepage')} >

<Icon
 name='home'
 color='white'
 type='entypo'
 size={38}
/>
<Text style={{color: 'white',fontSize: 12, paddingLeft:3}}>Home</Text>      
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('PendingDeliveriesHomepage')} style={{marginRight: -15}} >
 <Icon
    name='motorcycle'
    color='#E7B717'
    type='fontawesome'
    size={38}
    />
<Text style={{color: '#E7B717', fontSize: 12}}>Pending Delivery</Text> 
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('CompletedDeliveryHistoryHomepage')}>
<Icon
    name='back-in-time'
    color='white'
    type='entypo'
    size={38}
    />
<Text style={{color: 'white',fontSize: 12}}>Delivery History</Text>
    
</TouchableOpacity>

</View>
        
    </SafeAreaView>
     ) ;
}

const styles = StyleSheet.create({
    pendingContainer: {
        height:'100%',
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
  },
  item:{
    borderWidth: 0.4,
    borderColor:'gray',
    width:'75%',
    alignSelf: 'center',
    margin: 10,
    padding:10,
    backgroundColor:'white',
    borderRadius:10

  }
  
});
