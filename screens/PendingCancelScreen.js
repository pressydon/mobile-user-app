import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from "react-native"
import {CheckBox} from 'react-native-elements'


export default PendingCancelScreen =()=>{
    const [isSelected, setSelection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={{backgroundColor:'white', height:'100%'}}>
            <Text style={{margin:20, fontSize:18}}>Please let us know why you are cancelling this delivery request.</Text>

            <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Long delivery time</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cost of delivery</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Delivery agent asked to cancel</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Decided not to make the delivery</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Other reasons</Text>
      </View>

      <Text  style={{ marginTop: 20,marginLeft: 10,marginBottom:10}}>*Please tell us why</Text>
                   <TextInput
                    style={styles.inputThree}
                    // placeholder=""
                    autoCapitalize="none"
                    // autoCorrect={false}
                    // secureTextEntry={true}
                    textContentType="name"
                    multiline={true}
                />

            <TouchableOpacity
                // onPress={() => navigation.navigate('Delivery Summary')}
                onPress={() => setModalVisible(true)}
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
                        onPress={() => setModalVisible(!modalVisible)}>
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