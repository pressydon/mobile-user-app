import { View,Text } from "react-native"
import tw from 'tailwind-react-native-classnames';

export default Checkout=()=>{

    return(
        <View style={{display:'flex', flexDirection: 'row',alignItems: "center", justifyContent:'center',margin:20, marginTop:60}}>

        <View>
            <View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'goldenrod', }}>
            <Text style={[tw``,{ color: 'white', textAlign:'center'}]}>1</Text>
            </View>
          
            <Text style={{marginLeft:-30, fontSize: 12}}>Delivery details</Text>
        </View>
        <View style={{width: 120,height:2,backgroundColor: 'black', marginLeft: -40, marginBottom:18}}></View>

        <View>
        <View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'black', }}>
            <Text style={[tw``,{ color: 'white', textAlign:'center'}]}>2</Text>
            </View>
            <Text style={{marginLeft:-30, fontSize: 12}}>Delivery summary</Text>
        </View>
        <View style={{width: 130,height:2,backgroundColor: 'black', marginLeft: -50, marginBottom:18}}></View>

        <View>
        <View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'black', }}>
            <Text style={[tw``,{ color: 'white', textAlign:'center'}]}>3</Text>
            </View>
            <Text style={{marginLeft:-20, fontSize: 12}}>Payment</Text>
        </View>
        
    </View>
    )
}