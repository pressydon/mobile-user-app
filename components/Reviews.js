import { Image, StyleSheet, Text, View } from "react-native"
import {  Card, Icon } from 'react-native-elements';
import DropShadow from "react-native-drop-shadow"

export default Reviews=()=>{
    return(
        
        <DropShadow  style={styles.shadowProp}>
            <View style={{margin:5, display:'flex', flexDirection: 'row', justifyContent: 'space-around', borderRadius:20,gap:10,width:'90%', borderWidth:0.17,padding:5,alignSelf:'center'}}>

           
            <View >
            <Image
              style={{width:50,height:50, borderRadius: 50,marginLeft:20, marginTop:10}}
              resizeMode="cover"
              source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" }}
            />
            </View>
            <View style={{marginLeft:40, marginTop:10}}>
            <Text style={{color:'black', fontWeight:500,padding:5}}>Stephen Asemota</Text>
            <Text style={{color:'black',padding:5}}>was an excellent delivery agent</Text>
            </View>
            <View style={{margin:10, display:'flex', justifyContent: 'space-between', borderRadius:20,gap:30}}>
                <View style={{margin:10, display:'flex', flexDirection: 'row', justifyContent: 'center', borderRadius:20,marginTop:-5}}>
                 <Icon
        
                    name='star'
                    color='goldenrod'
                    type='antdesign'
                    size={12}
                  />
                 <Icon
                    
                    name='star'
                    color='goldenrod'
                    type='antdesign'
                    size={12}
                />
                <Icon
                    
                    name='star'
                    color='goldenrod'
                    type='antdesign'
                    size={12}
                />
                <Icon
                    
                    name='star'
                    color='goldenrod'
                    type='antdesign'
                    size={12}
                />
                <Icon
                    
                    name='star'
                    color='goldenrod'
                    type='antdesign'
                    size={12}
                />
      <Text style={{marginLeft:5, marginRight:10}}>5.0</Text>
                </View>

                <Text style={{alignSelf:'flex-end', paddingRight:15}}>11/06/21</Text>
            </View>

            </View>
       
    </DropShadow>


    )
    
}

const styles = StyleSheet.create({
   
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  
  });