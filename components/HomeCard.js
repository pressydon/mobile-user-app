import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default HomeCard=()=>{

    const [isBackgroundActive, setisBackgroundActive] = useState(styles.cardContainer)
    const [isDotActive, setIsDotActive] = useState(styles.cardDot)

    const confirmPress =()=>{
        setIsDotActive(styles.cardDotActive)
        setisBackgroundActive(styles.cardContainerActive)
    }
    return(<>
      
        
        <TouchableOpacity onPress={confirmPress}   style={isBackgroundActive}>
        
            <View style={isDotActive}></View>
          <Image
              style={{width:"100%",height:100, marginTop:20}}
              resizeMode="contain"
              source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
            />
          <Text >Instant delivery</Text>

         </TouchableOpacity>

        
         </>
    )

}

const styles = StyleSheet.create({
    cardContainer:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'white',
        width:180,
        height:190,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
        // padding:20,
        
     
        
       
    },
    cardContainerActive:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'black',
        width:180,
        height:190,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
       
    },
  cardDot:{
    width:20,
    height:20,
    borderColor: 'black',
    borderRadius:'50%',
    borderWidth: 2,
    position:'absolute',
    top: 10,
    right:10,
    // marginBottom:20
  },
  cardDotActive:{
    width:20,
    height:20,
    borderColor: 'white',
    borderRadius:'50%',
    borderWidth: 2,
    position:'absolute',
    top: 10,
    right:10,
    backgroundColor: 'gold'
  }
})