import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import { Card, Icon, Avatar  } from 'react-native-elements'


export default ProfileSettings=()=>{

    const navigation = useNavigation()

    return(
        <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
             <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
               
                <Text style={{fontSize:17}}>Recieve Notifications Alert</Text>
                  <Icon
            // onPress={() => navigation.goBack(null)}
                // style={{}}
                name='controller-volume'
                color='goldenrod'
                type='entypo'
                size={20}
                />
                
            </TouchableOpacity>

            </Card>

            <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity onPress={()=>navigation.navigate('ChatBox')} style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>Chat With Admin</Text>
                <Icon
                name='right'
                color='black'
                type='antdesign'
                size={20}
                />
            </TouchableOpacity>

            </Card>

                <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity onPress={()=>navigation.navigate('Faq')} style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>Frequently Asked Questions</Text>
                <Icon
                name='right'
                color='black'
                type='antdesign'
                size={20}
                />
            </TouchableOpacity>
            </Card>

                <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity onPress={()=>navigation.navigate('AboutIceRiders')} style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>About Ice-Riders</Text>
                <Icon
                name='right'
                color='black'
                type='antdesign'
                size={20}
                />
            </TouchableOpacity>
            </Card>

                <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>Rate Our App</Text>
            </TouchableOpacity>
            </Card>

                <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>Logout</Text>
            </TouchableOpacity>
            </Card>
        </View>
    )
}