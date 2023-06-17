import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingTwo() {

    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.onboardingOne}>
        <Image
        style={{width:"100%", height: "65%", resizeMode: 'cover'}}
        source={require('../assets/pic2.png')}
        />
        <Text style={styles.onboardingOneTitle}>Your Ultimate Logistics app</Text>
        <Text style={styles.onboardingOneText}>We offer Speed, Safety and Security of your items.</Text>

        <View style={styles.slideDotsContainer} >
            <View style={styles.slideDotsOne}></View>
            <View style={styles.slideDotsTwo}></View>
            <View style={styles.slideDotsThree}></View>
        </View>
        <TouchableOpacity
         onPress={()=> navigation.navigate('OnboardingThree')}
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

    width:20,
    height:5,
    backgroundColor: 'black'

 
  },
  slideDotsThree:{
    width:5,
    height:5,
    backgroundColor: 'lightgray',
    borderRadius: '50%'
  },
  onboardingNext:{
    textAlign:'right',
    fontSize:23,
    marginRight: 20,
    color: 'gray',
    marginTop: 30
  }
});