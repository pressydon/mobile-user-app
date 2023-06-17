import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from "react"
import {Dimensions,Keyboard, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { Fumi } from 'react-native-textinput-effects';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from "@env"
import {useDispatch} from 'react-redux'
import { setDestination, setOrigin } from "../slices/navSlice";
import tw from 'tailwind-react-native-classnames';
import Map from "../components/Map";
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default ScheduleDelivery=()=>{

  const navigation = useNavigation()

  const dispatch = useDispatch()

  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return(
    
    <KeyboardAwareScrollView
    nestedScrollEnabled={true}
    keyboardShouldPersistTaps='handled'
    horizontal={true}
    extraHeight={120}
    style={{
      
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
    }}
>



       <View    style={{backgroundColor: 'white', height: '100%'}}>

    <View         style={{
        height: Dimensions.get("window").height * 0.5,
        backgroundColor: "lightgrey",
        width: Dimensions.get("window").width,
      }}
>
      <Map />
    </View>

      <View style={{flex: 4 ,alignSelf: 'center', width:'100%',marginLeft: 50, marginTop: 20}}>
       
      <Text style={{paddingTop:10}}>Pick up location</Text>
     
              <GooglePlacesAutocomplete
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              placeholder="Pick up location"
              onPress={((data, details = null)=>{
                dispatch(setOrigin({
                  location: details.geometry.location,
                  description: data.description
                }))

                dispatch(setDestination(null))
              })}
              returnKeyType={"search"}
              fetchDetails={true}
              minLength={2}
              query={{
                key: GOOGLE_MAPS_KEY,
                language: 'en'
              }}
              enablePoweredByContainer={false}
              styles={{
                container:{
                  flex:0,
                  backgroundColor: "rgba(218, 218, 218, 0.4)",
                  borderRadius: 10,
                  padding: 12,
                  width: 350,
                  overflow:'hidden'
                },
                textInput:{
                  fontSize: 16,
                  backgroundColor: "rgba(218, 218, 218, 0.01)",
                  width:200,
                  overflow:'hidden'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                },
              }}

              />


           <Text style={{paddingTop:10}}>Drop off location</Text>

           <GooglePlacesAutocomplete
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              placeholder="Drop off location"
              onPress={((data, details = null)=>{
                dispatch(setDestination({
                  location: details.geometry.location,
                  description: data.description
                }))

              
              })}
              returnKeyType={"search"}
              fetchDetails={true}
              minLength={2}
              query={{
                key: GOOGLE_MAPS_KEY,
                language: 'en'
              }}
              enablePoweredByContainer={false}
              styles={{
                container:{
                  flex:0,
                  backgroundColor: "rgba(218, 218, 218, 0.4)",
                  borderRadius: 10,
                  padding: 12,
                  width: 350,
                  overflow:'hidden',
                  zIndex:50,
                 
                },
                textInputContainer:{
                  width:'90%',
                  marginRight:20
                },
                textInput:{
                  fontSize: 16,
                  backgroundColor: "rgba(218, 218, 218, 0.01)",
                  width:'100%',
                  overflow:'hidden',
                  zIndex:999,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                },
                // listView: {
                //   position: 'absolute',
                //   backgroundColor: '#FFF',
                //   zIndex: 10,
          
                //   },
                
              }}

              />

           {/* <Fumi
           label={'Drop off location'}
           iconClass={EntypoIcon}
           iconName={'location-pin'}
           iconColor={'#E7B717'}
           iconSize={20}
           iconWidth={40}
           inputPadding={13}
           style={styles.input}
       /> */}
    
             

      </View>

       <TouchableOpacity
              onPress={() => navigation.navigate('InstantDeliveryInput')}
               style={styles.button} >
                   <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Continue</Text>
               </TouchableOpacity>
          
      </View>
   
    </KeyboardAwareScrollView>
    )

}


const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(218, 218, 218, 0.4)",
    height: 35,
    // marginTop: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    width: '80%'
  },
  button: {
    backgroundColor: '#E7B717',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '60%',
    color: 'black',
    alignSelf: 'center',
    marginBottom:30
  },

});
