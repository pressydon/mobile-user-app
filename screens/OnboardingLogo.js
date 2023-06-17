import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function OnboardingLogo() {

   const [loadPage, setLoadPage] = useState(true)
    const timer = 3000;
    const navigation = useNavigation()

   useEffect(()=>{
    const loadInterval = setTimeout(()=>{
      setLoadPage(false)
      navigation.navigate('OnboardingOne')
    }, timer)

    return () => {
      clearTimeout(loadInterval);
    };
   }, [])
  return (<>
   { loadPage &&  <SafeAreaView style={styles.OnboardingContainer}>
        <Image
        style={{width:300, height: 300, resizeMode: 'center'}}
        source={require('../assets/icerider.png')}
        />
    </SafeAreaView>
     }
  </> ) ;
}

const styles = StyleSheet.create({
    OnboardingContainer: {
        height:'100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
  },
});
