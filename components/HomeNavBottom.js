import { useNavigation } from "@react-navigation/native"
import { View, Text } from "react-native"
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { TouchableOpacity } from "react-native-gesture-handler"

export default HomeNavBottom=()=>{

    const navigation = useNavigation()

    return(
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', backgroundColor: 'black', paddingTop:20, paddingBottom:30, paddingRight:20, paddingLeft: 30 }}>

            <TouchableOpacity onPress={()=>navigation.navigate('Homepage')} >

            <Icon
             name='home'
             color='#E7B717'
             type='entypo'
             size={38}
          />
          <Text style={{color: '#E7B717',fontSize: 12, paddingLeft:3}}>Home</Text>      
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('PendingDeliveriesHompage')} style={{marginRight: -15}} >
             <Icon
                name='motorcycle'
                color='white'
                type='fontawesome'
                size={38}
                />
            <Text style={{color: 'white', fontSize: 12}}>Pending Delivery</Text> 
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
    )
}