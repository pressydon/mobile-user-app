import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, withBadge } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import HomeNavBottom from '../components/HomeNavBottom';

const data = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Makeup kits',
        deliveryID: 12534,
        
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Watch',
        deliveryID: 12534,
    
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Milkshake',
        deliveryID: 12534,
      
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/3640734/pexels-photo-3640734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Beard oil',
        deliveryID: 12534,
      
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Pancake',
        deliveryID: 12534,
       
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Bruno Fucking Fernandes',
        deliveryID: 12534,
     
    },
    {
        id: 7,
        image: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Jeff Bezos',
        deliveryID: 12534,
     
    },
    {
        id: 8,
        image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Serena Williams',
        deliveryID: 12534,
     
    },
    {
        id: 9,
        image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'James Cordon',
        deliveryID: 12534,
      
    },
    
  ]

export default function PendingDeliveriesHomepage() {

    const navigation = useNavigation()



    

 
  return ( <SafeAreaView style={styles.pendingContainer}>
      
            <View style={{width:'100%', height:'25%', backgroundColor:'black'}}>

                <Text style={{color:'white', paddingTop:50,paddingLeft:20, fontWeight:600,fontSize:18}}>Pending Deliveries</Text>

            </View>

            <View style={{height: '73%', marginTop:-50}}>

                
              <FlatList
                  style={styles.content}
                   data={data}
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
                source={{ uri: item.image}} 
             />
             <View style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
             <Text  style={{ fontSize:20, fontWeight:'bold',}} >{item.name}</Text>
             <Text  >Delivery Id: {item.deliveryID}</Text>
             </View>

            </View>

           <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:'goldenrod',padding:5, borderRadius:5}} >
            <Text>View Details</Text>
           </TouchableOpacity>
        </TouchableOpacity>
    )}
      />



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
