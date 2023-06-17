import { useState, useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from "react-native"
import {CheckBox} from 'react-native-elements'
import { useSelector } from "react-redux";
import {  selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import { useNavigation } from "@react-navigation/native";


export default CompletedDeliveryReport =()=>{

  const [checked, setChecked] = useState(true);
  const deliveryDetails = useSelector( selectDeliveryDetails)
  const [fillInDetails, setFillInDetails] = useState(false)
  console.log('-----',deliveryDetails)


  const [selectedIndex, setIndex] = useState(0);

  
  const userInfo = useSelector(selectUserInfo)
  const navigation = useNavigation()

    const [isSelected, setSelection] = useState('');
    const [reportDescription, setReportDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [reportReason, setReportReason] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(()=>{
      if(selectedIndex === 0){
        setReportReason('parcel seal broken')
      } else if(selectedIndex === 1){
        setReportReason('Damaged goods')
      } else if(selectedIndex === 2){
        setReportReason('Long delivery time')
      } else if(selectedIndex === 3){
        setReportReason('Delivery agent was rude')
      }  else if(selectedIndex === 4){
        setReportReason('Other reasons')
      }
    }, [reportReason,selectedIndex])

    // (deliveryDetails)

    // const handleCheckboxToggle = () => {
    //   setIsChecked(!isChecked);
    // };
    let formdata = new FormData();
    formdata.append("delivery_id", deliveryDetails.data.id);
    formdata.append("reason", reportReason);
    formdata.append("description", reportDescription);

    console.log(formdata)
 

    let reqOptions = {
      url:'https://ryder-app-production.up.railway.app/api/user/report',
      method: "POST",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: formdata,
    }
    

    const submitReport=async()=>{

      if(   !reportDescription  ){
        setFillInDetails(true)
        return
      } 
      
      try {

        let eachReport = await axios.request(reqOptions);
        console.log(eachReport.data);
          
        setModalVisible(true)
        
      } catch (error) {
        console.error(error.response.data)
      }
    }

    return(
        <View style={{backgroundColor:'white', height:'100%'}}>
            <Text style={{margin:20, fontSize:18}}>Please let us know why you are reporting this delivery.</Text>

            <View style={styles.checkboxContainer}>
        <CheckBox
        // title="Checkbox Label"
        // checked={isChecked}
        // onPress={handleCheckboxToggle}
        checked={selectedIndex === 0}
        onPress={() => setIndex(0)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>parcel seal broken</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          checked={selectedIndex === 1}
          onPress={() => setIndex(1)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Damaged goods</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          checked={selectedIndex === 2}
          onPress={() => setIndex(2)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Long delivery time</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          checked={selectedIndex === 3}
          onPress={() => setIndex(3)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Delivery agent was rude</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          checked={selectedIndex === 4}
          onPress={() => setIndex(4)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Other reasons</Text>
      </View>

      <Text  style={{ marginTop: 20,marginLeft: 10,marginBottom:10}}>*Please tell us why</Text>

                   <TextInput
                    style={styles.inputThree}
                    value={reportDescription}
                    autoCapitalize="none"
                    onFocus={()=>{setFillInDetails(false)}}
                    onChangeText={(text) => setReportDescription(text)}
                    textContentType="name"
                    multiline={true}
                />
                      {fillInDetails &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Please complete the form</Text>}

            <TouchableOpacity
                // onPress={() => navigation.navigate('Delivery Summary')}
                onPress={submitReport}
                 style={styles.buttonSubmit} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Submit</Text>
                 </TouchableOpacity>

                 {/* modal display */}

                 <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Thank you for your feedback</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() =>{navigation.navigate('Homepage'), setModalVisible(!modalVisible)}}>
                        <Text style={styles.textStyle}>Okay</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
  
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 5,
      alignItems: 'center'
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
    },
    inputThree: {
        backgroundColor: "rgba(218, 218, 218, 0.4)",
        height: 100,
        // marginTop: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        width: '90%',
        alignSelf:'center'
      },
      buttonSubmit: {
        backgroundColor: '#E7B717',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '60%',
        color: 'black',
        alignSelf: 'center',
        marginBottom: 20
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:100
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#E7B717',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
  });