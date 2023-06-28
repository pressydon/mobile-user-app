import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from "react-native"
import {Rating} from 'react-native-elements'
import { useSelector } from "react-redux";
import { selectDeliveryMedium, selectDeliveryType, selectDestination, selectOrigin, selectTravelTimeInformation, setDeliveryDetails, selectDeliveryDetails } from "../slices/navSlice";
import { selectUserInfo } from "../slices/authSlice";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";


export default CompletedReviewFeedbackScreen =({route})=>{

  
  const [fillInDetails, setFillInDetails] = useState(false)

  const {item} = route.params
  
  const userInfo = useSelector(selectUserInfo)
 const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

    const [rated, setRated] = useState(4);
    const [modalVisible, setModalVisible] = useState(false);
    
    const ratingCompleted = (rating) => {
        console.log('Rating is: ' + rating);
        setRated(rating)
      };

      // console.log(Math.floor(rated));
  
    const [feedbackDescription, setFeedbackDescription] = useState('');

    console.log('----',Math.round(rated))

    let formdata = new FormData();
    formdata.append("delivery_id", item.id);
    formdata.append("stars", Math.round(rated));
    formdata.append("review", feedbackDescription);

    console.log(formdata)

    let reqOptions = {
      url:'https://ryder-app-production.up.railway.app/api/user/review',
      method: "POST",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: formdata,
    }
    

    const submitFeedback=async()=>{

      if(   !feedbackDescription  ){
        setFillInDetails(true)
        return
      } 

      setLoading(true)
      try {

        let eachReport = await axios.request(reqOptions);
        console.log(eachReport.data);
       
          
        setModalVisible(true)
        setLoading(false)
      } catch (error) {
        console.error(error.response.data)
        if(error){
          setLoading(false)
        }
      }
    }


    return(
        <View style={{backgroundColor:'white', height:'100%'}}>
            <Text style={{margin:20, fontSize:18}}>How do you rate this delivery agent</Text>

            <View>
            <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={3.6}
                imageSize={40}
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                />

            </View>

        <Text  style={{ marginTop: 20,marginLeft: 10,marginBottom:10}}>*Please tell us why</Text>

                   <TextInput
                    style={styles.inputThree}
                    value={feedbackDescription}
                    autoCapitalize="none"
                    onFocus={()=>{setFillInDetails(false)}}
                    onChangeText={(text) => setFeedbackDescription(text)}
                    textContentType="name"
                    multiline={true}
                    
                />
             {fillInDetails &&  <Text style={{textAlign:'left',alignSelf:'flex-end', marginRight:40, color:'red', width:170, fontSize:15}}>Please complete the form</Text>}
            <TouchableOpacity
                // onPress={() => navigation.navigate('Delivery Summary')}
                onPress={submitFeedback}
                 style={styles.buttonSubmit} >
                     <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18, }}>Publish Review</Text>
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
                        onPress={() =>{ navigation.navigate('Homepage') , setModalVisible(!modalVisible)}}>
                        <Text style={styles.textStyle}>Okay</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
                {loading ? <Loader /> : null}
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
        marginTop: 60,
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