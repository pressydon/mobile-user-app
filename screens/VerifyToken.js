import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
// import {useCountdown} from '../utils/useCountdown'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
}  from 'react-native-confirmation-code-field'
import { useSelector } from "react-redux";
import { setAuthSuccess, selectUserInfo, selectAuthLoading, selectAuthSuccess, selectAuthError } from "../slices/authSlice";
import {useDispatch} from 'react-redux'


export default function VerifyToken() {


  const userInfo = useSelector(selectUserInfo)
  const navigation = useNavigation()


  const [otpValue, setOtpValue] = useState(null)
 
// console.log(userInfo.token)
// console.log(userInfo.otp)
    const CELL_COUNT = 4;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    useEffect(()=>{

      // console.log(value)
      const verifyUser = async()=>{
        try {

          console.log(userInfo.user.otp)
          if (+value === userInfo.user.otp){
          
            await axios.post(`https://ryder-app-production.up.railway.app/api/user/verify?otp=${userInfo.user.otp}`, {
              headers: {
                Authorization: `Bearer ${userInfo.token}`,
              },
            });
        navigation.navigate('Homepage')
      }else {
        console.log('otp wrong')
      }
  
          
        } catch (error) {
          console.error(error.response)
        }
    

      }

      verifyUser()
      
    }, [value])
  

    
  return (
    <SafeAreaView style={styles.OnboardingContainer}>
{/* 
            <Icon
            onPress={() => navigation.goBack(null)}
             style={tw` p-3 w-10 mt-4`}
             name='left'
             color='black'
             type='antdesign'
              />
              <Text style={tw`text-center text-xl m-3`}>Verify Phone Number</Text>
              <Text style={tw`text-center text-sm m-7`}>Enter the OTP sent by SMS to 08067654534</Text>

              <View style={[tw`flex flex-row m-7`, {alignItems: 'center', justifyContent: 'center'}]}>
              <TextInput
                    style={{width:33, borderBottomWidth: 1, borderBottomColor: 'black', margin: 10, fontSize: 30}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="oneTimeCode"
                    value={tokenOne}
                    onChangeText={(text) => setTokenOne(text)}
                />
                 <TextInput
                    style={{width:33, borderBottomWidth: 1, borderBottomColor: 'black', margin: 10, fontSize: 30}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="oneTimeCode"
                    value={tokenTwo}
                    onChangeText={(text) => setTokenTwo(text)}
                />
                 <TextInput
                    style={{width:33, borderBottomWidth: 1, borderBottomColor: 'black', margin: 10, fontSize: 30}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="oneTimeCode"
                    value={tokenThree}
                    onChangeText={(text) => setTokenThree(text)}
                />
                 <TextInput
                    style={{width:33, borderBottomWidth: 1, borderBottomColor: 'black', margin: 10, fontSize: 30}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="oneTimeCode"
                    value={tokenFour}
                    onChangeText={(text) => setTokenFour(text)}
                />
                 
              </View>

                <View style={[tw`flex flex-row m-7`, {alignItems: 'center', justifyContent: 'center'}]}>

                  <Text>We would send you another code in</Text>
                  <Text style={tw`text-blue-500`}> 00:45</Text>

                </View> */}

<Text style={styles.title}>Verify Token</Text>
<Text style={{textAlign:'center',marginBottom:40 }}>Ensure you type the right token from your email</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        autoFocus={true}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />


       
    </SafeAreaView>
    ) ;
}

const styles = StyleSheet.create({
    OnboardingContainer: {
        height:'100%',
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
  },

  root: {flex: 1, padding: 20, },
  title: {textAlign: 'center', fontSize: 30, marginTop:50,marginBottom:10},
  codeFieldRoot: {marginTop: 20, width:'80%', alignSelf:'center'},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius:10
   
  },
  focusCell: {
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#E7B717',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    width: '80%',
    alignSelf:'center',

  },
});
