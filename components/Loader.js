import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default function Loader({loadingText}) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);

  return (<>
  { loading ?
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.85)"
      animationStyle={styles.lottie}
      source={require("../assets/data.json")}
      speed={1}
     
      >
      <Text style={{width:'80%',backgroundColor: 'white', textAlign:'center', fontSize:18}}>{loadingText}</Text>
    </AnimatedLoader>
    : null
}
    </>
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
   
  },
});