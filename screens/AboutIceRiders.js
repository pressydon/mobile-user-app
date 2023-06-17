import React, {useCallback} from 'react';

import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View, Linking } from "react-native"
import { Card, Icon, Avatar  } from 'react-native-elements'


export default ProfileSettings=()=>{

    const supportedURL = 'mailto:support@iceridersnigeria.com';
    

    
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(supportedURL);
      
          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(supportedURL);
            
          } 
       
        }, [supportedURL]);

    const navigation = useNavigation()

    return(
        <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
             <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity onPress={handlePress} style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
               
                <Text style={{fontSize:17}}>Contact us  </Text>
                <Text style={{color:'goldenrod',fontSize:17}}>support@iceridersnigeria.com</Text>
                
            </TouchableOpacity>

            </Card>

                <Card 
             containerStyle={{width:'95%',alignSelf:'center',}}
             >
            <TouchableOpacity onPress={()=>navigation.navigate('TermsAndCondition')} style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>Terms and condition of use</Text>
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
            <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')} style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:17}}>Privacy Policy</Text>
                <Icon
                name='right'
                color='black'
                type='antdesign'
                size={20}
                />
            </TouchableOpacity>
            </Card>

               

               
        </View>
    )
}