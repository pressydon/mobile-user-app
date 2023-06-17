import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingThree() {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.onboardingOne}>
        <Image
        style={{width:"100%", height: "65%", resizeMode: 'cover'}}
        source={require('../assets/pic3.png')}
        />
        <Text style={styles.onboardingOneTitle}>Send Anything Anywhere</Text>
        <Text style={styles.onboardingOneText}>From small and medium parcels to House movement.</Text>

        <View style={styles.slideDotsContainer} >
            <View style={styles.slideDotsOne}></View>
            <View style={styles.slideDotsTwo}></View>
            <View style={styles.slideDotsThree}></View>
        </View>

        
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.onboardingGetStarted} >
            <Text style={{  color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Get Started</Text>
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
        fontWeight: 'bold'
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

    width:5,
    height:5,
    backgroundColor: 'lightgray',
    borderRadius: '50%'

   
  },
  slideDotsTwo:{
    width:5,
    height:5,
    backgroundColor: 'lightgray',
    borderRadius: '50%'
  },
  slideDotsThree:{
    width:20,
    height:5,
    backgroundColor: 'black'
  },
  onboardingNext:{
    textAlign:'right',
    fontSize:23,
    marginRight: 20,
    color: 'gray',
    marginTop: 30
  },
  onboardingGetStarted:{
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width:'65%',
    padding:20,
    backgroundColor: '#E7B717',
    marginTop: 15,
    textAlign: 'center',
    borderRadius: 15
  
  }
});