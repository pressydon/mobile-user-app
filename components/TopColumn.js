import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';


const BadgedIcon = withBadge(15)(Icon);

export default TopColumn =()=>{

    const navigation = useNavigation()

    return(
        <View style={{display:'flex',flexDirection: 'row', height: '12%', width: '100%', backgroundColor:'black',color:'white', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomLeftRadius: 30,borderBottomRightRadius: 30}}>
        <Text style={{color: 'white', fontSize:18}}>Hi Clarence,</Text>
        <View style={{display:'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}} >
        
            <Avatar
                onPress={()=>navigation.navigate('Profile')}
                size={50}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
          
            <Icon
        // onPress={() => navigation.goBack(null)}
            //  style={tw`  `}
             name='notifications'
             color='#E7B717'
             type='ionicons'
             size={32}
          />

          <Badge value="3" status="warning"  badgeStyle={{backgroundColor:'transparent', borderColor: 'transparent'}} textStyle={{fontSize:15,fontWeight:'bold'}}     containerStyle={{ position: 'absolute', top: 15, left: 77 }}  />
        </View>
    </View>
    )
}