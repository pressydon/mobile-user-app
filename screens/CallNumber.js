import { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Icon} from 'react-native-elements'


export default CallNumber=()=>{

    const [calling, setCalling] = useState(false)

    return(
        <View style={{width:'100%', height:'100%', backgroundColor:'white'}}>
         <View style={{display:'flex',justifyContent:'center',alignItems:'center', margin:50}}>

         <Text style={{fontSize:20, marginTop:50}}>Calling Peter Obi</Text>
         <Text style={{fontSize:18, marginTop:30, color:'gray'}}>Delivery Agent</Text>

         <Image
            style={{width:140,height:140, borderRadius: 10, margin:50}}
            resizeMode="cover"
            source={require('../assets/callingImage.png')}
            />

            <View style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between', width:'50%',marginTop:80}}>
            <Icon
                 style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                 name='keyboard-voice'
                 color='black'
                 type='materialicon'
                 size={30}
                 />
                  <Icon
                 style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
                 name='volume-2'
                 color='black'
                 type='feather'
                 size={30}
                 />
            </View>

            <View style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent: calling ? 'space-between' : 'center', width:'70%',marginTop:80}}>

         { calling &&   <TouchableOpacity

        // onPress={() => setModalVisible(true)}
        style={styles.buttonCallAccept} >
            
                <Icon
            style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
            name='telephone'
            color='white'
            type='foundation'
            size={22}
            />

        </TouchableOpacity>}

            <TouchableOpacity

// onPress={() => setModalVisible(true)}
    style={styles.buttonCall} >
        
            <Icon
        style={{fontWeight: 'bold', color: 'black', fontSize: 18}}
        name='old-phone'
        color='white'
        type='entypo'
        size={22}
        />

</TouchableOpacity>

            </View>

            
         </View>
         
        </View>
    )
}


const styles = StyleSheet.create({
   
    buttonCall: {
        backgroundColor: 'red',
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        width: 50,
        color: 'black',
        alignSelf: 'center',
        marginBottom:20
      },
      buttonCallAccept: {
        backgroundColor: 'green',
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        width: 50,
        color: 'black',
        alignSelf: 'center',
        marginBottom:20
      },
  
  });