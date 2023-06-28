import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Checkout from "../components/Checkout"
import { CheckBox, Card } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../slices/authSlice";
import { selectDeliveryDetails } from "../slices/navSlice";


export default PaymentOptions=()=>{
    const [selectedIndex, setIndex] = useState(0);

    const navigation = useNavigation()

    const paystackWebViewRef = useRef(paystackProps.payStackRef); 

    const userInfo = useSelector(selectUserInfo)
    const deliveryDetails = useSelector(selectDeliveryDetails)

    console.log(deliveryDetails.data.amount)
    console.log(userInfo.user.email)
    console.log(userInfo.user.phoneNumber)
    console.log(userInfo.user.name)

    const dispatch = useDispatch()

    // const submitRef=()=>{
    //       const url = new URL(
    //           "http://143.198.145.29/api/user/payment/verify"
    //       );
          
    //       const headers = {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json",
    //           'Authorization': `Bearer ${userInfo.token}`,
    //       };
          
    //       let body = {
    //           "tx_ref": 'T043595021559182'
    //       };
    //         fetch(url, {
    //           method: "POST",
    //           headers,
    //           // body: {"tx_ref": res.transactionRef.trxref},
    //           body: JSON.stringify(body),
    //       }).then(response => response.json())
    //       .then(data => console.log(data))
    //       .catch(err=>console.log(err.response))
           
    // }

 


    return(
     
        <View style={{backgroundColor: 'white',height:'100%'}}>
            {/* checkout below */}

            <View style={{display:'flex', flexDirection: 'row',alignItems: "center", justifyContent:'center',margin:20}}>

<View>
    <View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'black', }}>
    <Text style={[{ color: 'white', textAlign:'center'}]}>1</Text>
    </View>
  
    <Text style={{marginLeft:-30, fontSize: 12}}>Delivery details</Text>
</View>
<View style={{width: 120,height:2,backgroundColor: 'black', marginLeft: -40, marginBottom:18}}></View>

<View>
<View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'black', }}>
    <Text style={[{ color: 'white', textAlign:'center'}]}>2</Text>
    </View>
    <Text style={{marginLeft:-30, fontSize: 12}}>Delivery summary</Text>
</View>
<View style={{width: 130,height:2,backgroundColor: 'black', marginLeft: -50, marginBottom:18}}></View>

<View>
<View style={{borderRadius: '50%',width:20, height:20, backgroundColor: 'goldenrod', }}>
    <Text style={[{ color: 'white', textAlign:'center'}]}>3</Text>
    </View>
    <Text style={{marginLeft:-20, fontSize: 12}}>Payment</Text>
</View>

</View>

            {/* paystack */}

            <Paystack
        paystackKey="pk_test_7ee4b93ca9487bbd5949b806e654cde8ff4ad3e7"
        billingEmail={userInfo.user.email}
        paystackSecretKey= "sk_test_2cd3d51d922f0a43ccfa8fef6a3675720e44a555"
        billingMobile={userInfo.user.phoneNumber}
        billingName={userInfo.user.name}
        ActivityIndicatorColor='yellow'
        currency="NGN"
        amount={deliveryDetails.data.amount}
        onCancel={(e) => {
          console.log(e)
        }}
        onSuccess={(res) => {
          console.log(res.transactionRef.trxref)
        //  '143.198.145.29/api/user/payment/verify'
          if(res.status === 'success'){
            const url = new URL(
              "http://143.198.145.29/api/user/payment/verify"
          );
          
          const headers = {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': `Bearer ${userInfo.token}`,
          };
          
          let body = {
              "tx_ref": res.transactionRef.trxref,
              "delivery_id": `${deliveryDetails.data.id}`
          };
            fetch(url, {
              method: "POST",
              headers,
              // body: {"tx_ref": res.transactionRef.trxref},
              body: JSON.stringify(body),
          }).then(response => response.json())
          .then(data => {
            console.log('==----===',data)
            navigation.navigate('InstantDeliveryArriving')
          })
          .catch(err=>console.log(err.response.data))
          }
       
        }}
        ref={paystackWebViewRef}
      /> 
       {/* paystack end */}
            <View >
            
            <Card style={{display:'flex', flexDirection: 'row'}}>
                {/* <Text>Pay from wallet</Text> */}
            <CheckBox
            // onPress={()=>navigation('')}
             title='Pay from wallet'
           checked={selectedIndex === 0}
           onPress={() => {setIndex(0), navigation.navigate('InstantDeliveryArriving')}}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           iconRight
           right
           textStyle={{alignSelf: 'flex-start', marginRight:150}}
           checkedColor="gold"
         />
            </Card>
       
            <Card>
            {/* <Text>Pay with card</Text> */}
            <CheckBox
            title='Pay with card'
           checked={selectedIndex === 1}
           onPress={() => {setIndex(1), paystackWebViewRef.current.startTransaction()}}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           iconRight
           right
           textStyle={{alignSelf: 'flex-start', marginRight:150}}
           checkedColor="gold"
         />

        
            </Card>
           
           <Card>
           {/* <Text style={{marginBottom:-10}}>Pay with Cash</Text> */}
           <CheckBox
            title='Pay with cash'
           checked={selectedIndex === 2}
           onPress={() => {setIndex(2), navigation.navigate('InstantDeliveryArriving')}}
          // onPress={submitRef}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           iconRight
           right
           textStyle={{alignSelf: 'flex-start', marginRight:150}}
           checkedColor="gold"
         />

           </Card>
        
            </View>
         

             {/* <TouchableOpacity
                onPress={() => navigation.navigate('InstantDeliveryArriving')}
                 style={styles.button} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Continue</Text>
                 </TouchableOpacity> */}
        </View>
    
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#E7B717',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      width: '60%',
      color: 'black',
      alignSelf: 'center',
      marginBottom:40
    },
  
  });