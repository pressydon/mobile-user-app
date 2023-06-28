import { useNavigation } from '@react-navigation/native';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingOne() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.onboardingOne}>
        <Image
        style={{width:"100%", height: "65%", resizeMode: 'cover'}}
        source={require('../assets/homepage.png')}
        />
        <Text style={styles.onboardingOneTitle}>Welcome to Ice-Riders</Text>
        <Text style={styles.onboardingOneText}>Door to Door delivery services of goods for individuals and businesses.</Text>

        <View style={styles.slideDotsContainer} >
            <View style={styles.slideDotsOne}></View>
            <View style={styles.slideDotsTwo}></View>
            <View style={styles.slideDotsThree}></View>
        </View>

        <TouchableOpacity
         onPress={()=> navigation.navigate('OnboardingTwo')}
         >
        <Text style={styles.onboardingNext}>NEXT</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    onboardingOne: {
        height:'100%',
        width:'100%',
      
        // justifyContent: 'center',
        backgroundColor: 'white'
  },
  onboardingOneTitle:{
        color: 'black',
        marginLeft: 70,
        marginTop:20,
        fontSize: 20,
        fontWeight: (Platform.OS === 'ios') ? 'bold' : 600 
  },
  onboardingOneText:{
          alignItems: 'center',
          marginLeft: 70,
          marginTop:20,
          fontSize: 15,
          marginRight: 50
  },
  slideDotsContainer:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: 90
  },
  slideDotsOne:{
    width:20,
    height:5,
    backgroundColor: 'black'
  },
  slideDotsTwo:{
    width:5,
    height:5,
    backgroundColor: 'lightgray',
    borderRadius: 50
  },
  slideDotsThree:{
    width:5,
    height:5,
    backgroundColor: 'lightgray',
    borderRadius: 50
  },
  onboardingNext:{
    textAlign:'right',
    fontSize:23,
    marginRight: 20,
    color: 'gray',
    marginTop: 30
  }
});