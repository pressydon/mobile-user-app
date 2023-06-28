import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import TopColumn from '../components/TopColumn';
import HomeCard from '../components/HomeCard';
import HomeNavBottom from '../components/HomeNavBottom';
import { useDispatch, useSelector } from 'react-redux';
import { selectDeliveryMedium, setDeliveryMedium, setDeliveryType, selectDeliveryType } from '../slices/navSlice';
import { selectUserInfo } from '../slices/authSlice';

const BadgedIcon = withBadge(15)(Icon);

export default function Homepage() {

    const navigation = useNavigation()
    const userInfo = useSelector(selectUserInfo)

    const [selectInstant, setSelectInstant] = useState()
    const [selectSchedule, setSelectSchedule] = useState()
    const [isBackgroundActive, setisBackgroundActive] = useState(styles.cardContainerActive)
    const [isDotActive, setIsDotActive] = useState(styles.cardDotActive)

    const [isShedBackgroundActive, setIsShedBackgroundActive] = useState(styles.shedCardContainer)
    const [isShedDotActive, setIsShedDotActive] = useState(styles.shedCardDot)

    const [isInstantText, setIsInstantText] = useState(styles.instantText)
    const [isShedText, setIsShedText] = useState(styles.schedTextActive);


    const [isBikeActive , setIsBikeActive] = useState(styles.bikeContainer)
    const [isCarActive , setIsCarActive] = useState(styles.carContainerActive)
    const [isBusActive , setIsBusActive] = useState(styles.busContainer)

    const [isBikeDotActive , setIsBikeDotActive] = useState(styles.bikeDot)
    const [isCarDotActive , setIsCarDotActive] = useState(styles.carDotActive)
    const [isBusDotActive , setIsBusDotActive] = useState(styles.busDot)
    
    // const [deliveryType, setDeliveryType] = useState('')

    const [isBikeTextActive , setIsBikeTextActive] = useState(styles.bikeTextActive)
    const [isCarTextActive , setIsCarTextActive] = useState(styles.carText)
    const [isBusTextActive , setIsBusTextActive] = useState(styles.busTextActive)
    
    const [bike, setBike] = useState({name:'bike',amount: 70})
    const [car, setCar] = useState({name:'car',amount: 100})
    const [bus, setBus] = useState({name:'bus',amount: 150})
    const dispatch = useDispatch()

    const deliveryMedium = useSelector(selectDeliveryMedium)
    const deliveryType = useSelector(selectDeliveryType)

     const   instantPress =()=>{
            setIsDotActive(styles.cardDotActive)
            setisBackgroundActive(styles.cardContainerActive)
            setIsShedBackgroundActive(styles.shedCardContainer)
            setIsShedDotActive(styles.shedCardDot)
            setIsInstantText(styles.instantText)
            setIsShedText(styles.schedTextActive)
            setSelectInstant(true)
            setSelectSchedule(false)
            setDeliveryType('instant')
            // dispatch(setDeliveryMedium(car))
            dispatch(setDeliveryType('instant'))
        }
    
      const  schedulePress =()=>{
            setIsDotActive(styles.cardDot)
            setisBackgroundActive(styles.cardContainer)
            setIsShedBackgroundActive(styles.shedCardContainerActive)
            setIsShedDotActive(styles.shedCardDotActive)
            setIsInstantText(styles.instantTextActive)
            setIsShedText(styles.schedText)
            setSelectInstant(false)
            setSelectSchedule(true)
            setDeliveryType('scheduled')
            dispatch(setDeliveryType('scheduled'))
        }

        const bikePress=()=>{
            setIsBikeActive(styles.bikeContainerActive)
            setIsBikeDotActive(styles.bikeDotActive)
            setIsBikeTextActive(styles.bikeText)
            setIsCarActive(styles.carContainer)
            setIsCarDotActive(styles.carDot)
            setIsCarTextActive(styles.carText)
            setIsBusActive(styles.busContainer)
            setIsBusDotActive(styles.busDot)
            setIsBusTextActive(styles.busText)
            dispatch(setDeliveryMedium(bike))
    
        }


    const carPress=()=>{
        setIsBikeActive(styles.bikeContainer)
        setIsBikeDotActive(styles.bikeDot)
        setIsBikeTextActive(styles.bikeTextActive)
        setIsCarActive(styles.carContainerActive)
        setIsCarDotActive(styles.carDotActive)
        setIsCarTextActive(styles.carText)
        setIsBusActive(styles.busContainer)
        setIsBusDotActive(styles.busDot)
        setIsBusTextActive(styles.busText)
        dispatch(setDeliveryMedium(car))

    }

    const busPress=()=>{
        setIsBikeActive(styles.bikeContainer)
        setIsBikeDotActive(styles.bikeDot)
        setIsBikeTextActive(styles.bikeText)
        setIsCarActive(styles.carContainer)
        setIsCarDotActive(styles.carDot)
        setIsCarTextActive(styles.carText)
        setIsBusActive(styles.busContainerActive)
        setIsBusDotActive(styles.busDotActive)
        setIsBusTextActive(styles.busText)
        dispatch(setDeliveryMedium(bus))

    }
   

    
   console.log(deliveryMedium)
   console.log(userInfo)
   

 
  return ( <SafeAreaView style={styles.homeContainer}>
      
            <TopColumn />

                    <View style={styles.gradient}>
            <View style={{width:'65%', padding:10}}>
                <Text style={{color: 'white', fontSize: 18}}>Be at peace, while we run your errands.</Text>
                <Text style={{color: '#E7B717'}}>Poise to serve you excellently</Text>
            </View>

             <Image
                style={{width:100, height: 100, resizeMode: 'center'}}
                 source={require('../assets/vault.png')}
             />
                </View> 



                <View style={{height:'61%', paddingTop:10}}>
                
            
          <View>
                <Text style={{paddingLeft:15,fontSize: 15}}>Choose a delivery type</Text>
                <View style={{display:'flex', flexDirection: 'row',alignItems: 'center', width: '90%',justifyContent:'space-around', marginLeft: 20,gap:20, marginRight:20 }}>

                  {/*instant  */}
        <TouchableOpacity  onPress={instantPress}  style={isBackgroundActive}>
        
        <View style={isDotActive}></View>
      <Image
          style={{width:"68%",height:65, marginTop:30}}
          resizeMode="contain"
          source={require('../assets/fast.png')}
        />
      <Text style={isInstantText} >Instant delivery</Text>

     </TouchableOpacity>
        {/* scheduled  */}
                   
        <TouchableOpacity onPress={schedulePress}  style={isShedBackgroundActive}>
        
        <View style={isShedDotActive}></View>
      <Image
          style={{width:"68%",height:65, marginTop:30}}
          resizeMode="contain"
          source={require('../assets/calender.png')}
        />
      <Text style={isShedText} >Schedule delivery</Text>

     </TouchableOpacity>
                  
                </View>
            </View>




            <View>
                <Text style={{paddingLeft:15,fontSize: 15}}>Choose a delivery medium</Text>
                <View style={{display:'flex', flexDirection: 'row',alignItems: 'center', width: '90%',justifyContent:'space-around', marginLeft: 20,gap:20, marginRight:20 }}>

     <TouchableOpacity onPress={bikePress}  style={isBikeActive} >
        
        <View style={isBikeDotActive} ></View>
      <Image
          style={{width:"68%",height:65, marginTop:30}}
          resizeMode="contain"
          source={require('../assets/bike.png')}
        />
      <Text style={isBikeTextActive}  >Bike</Text>

     </TouchableOpacity>

     <TouchableOpacity  onPress={carPress}  style={isCarActive}>
        
        <View style={isCarDotActive}  ></View>
      <Image
          style={{width:"68%",height:65, marginTop:30}}
          resizeMode="contain"
          source={require('../assets/car.png')}
        />
      <Text  style={isCarTextActive}  >car</Text>

     </TouchableOpacity>

     <TouchableOpacity onPress={busPress}   style={isBusActive}>
        
        <View style={isBusDotActive}  ></View>
      <Image
          style={{width:"68%",height:65, marginTop:30}}
          resizeMode="contain"
          source={require('../assets/bus.png')}
        />
      <Text  style={isBusTextActive} >Bus</Text>

     </TouchableOpacity>

                </View>
            </View>



    {/* logo column homepage */}

    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin:10, backgroundColor: 'black', padding: 20, borderRadius: 10}}>
    <Image
                style={{width:40, height: 40, resizeMode: 'cover'}}
                 source={require('../assets/icerider.png')}
             />
             <TouchableOpacity onPress={()=> navigation.navigate('InstantDelivery',{deliveryMedium:deliveryMedium, deliveryType: deliveryType})} style={{backgroundColor: '#E7B717', padding: 10,borderRadius: 20 }}>
                  <Text style={{color: 'white', fontSize: 20, }}>Request Delivery</Text>
             </TouchableOpacity>
       
    </View>

    </View>
        
        <HomeNavBottom />
        
    </SafeAreaView>
     ) ;
}

const styles = StyleSheet.create({
    homeContainer: {
        height:'100%',
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
  },
  gradient:{
    height:'15%',
    margin: 20,
    backgroundColor:'black',
    borderRadius: 10,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

//   instant and scheule styling

cardContainer:{
    position:"relative",
    alignItems:"center",
    backgroundColor: 'white',
    width:170,
    height:170,
    margin: 10,
    marginRight:10,
    borderColor: 'lightgray',
    borderWidth: 2,
   
},
cardContainerActive:{
    position:"relative",
    alignItems:"center",
    backgroundColor: 'black',
    width:170,
    height:170,
    margin: 10,
    marginRight:10,
    borderColor: 'lightgray',
    borderWidth: 2,
    
    },
    cardDot:{
        width:20,
        height:20,
        borderColor: 'black',
        borderRadius:'50%',
        borderWidth: 2,
        position:'absolute',
        top: 10,
        right:10,
    },
    cardDotActive:{
        width:20,
        height:20,
        borderColor: 'white',
        borderRadius:'50%',
        borderWidth: 2,
        position:'absolute',
        top: 10,
        right:10,
        backgroundColor: 'gold'
    },

   instantText:{
    fontSize:20,
    color: 'white',
    marginTop: 20,
   },
   instantTextActive:{
    fontSize:20,
    color: 'black',
    marginTop: 20,
   },
    // schedule

shedCardContainer:{
    position:"relative",
    alignItems:"center",
    backgroundColor: 'white',
    width:170,
    height:170,
    margin: 10,
    marginRight:10,
    borderColor: 'lightgray',
    borderWidth: 2,
    
   
},
 shedCardContainerActive:{
    position:"relative",
    alignItems:"center",
    backgroundColor: 'black',
    width:170,
    height:170,
    margin: 10,
    marginRight:10,
    borderColor: 'lightgray',
    borderWidth: 2,
   
},
    shedCardDot:{
        width:20,
        height:20,
        borderColor: 'black',
        borderRadius:'50%',
        borderWidth: 2,
        position:'absolute',
        top: 10,
        right:10,
    },
    shedCardDotActive:{
        width:20,
        height:20,
        borderColor: 'white',
        borderRadius:'50%',
        borderWidth: 2,
        position:'absolute',
        top: 10,
        right:10,
        backgroundColor: 'gold'
    },
    schedText:{
        fontSize:20,
        color: 'white',
        marginTop: 20,
       },
       schedTextActive:{
        fontSize:20,
        color: 'black',
        marginTop: 20,
       },
    //    medium of delivery styling
    bikeContainer:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'white',
        width:120,
        height:120,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    carContainer:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'white',
        width:120,
        height:120,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    busContainer:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'white',
        width:120,
        height:120,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    bikeContainerActive:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'black',
        width:120,
        height:120,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    carContainerActive:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'black',
        width:120,
        height:120,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    busContainerActive:{
        position:"relative",
        alignItems:"center",
        backgroundColor: 'black',
        width:120,
        height:120,
        margin: 10,
        marginRight:10,
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    bikeDot:{
        width:20,
        height:20,
        borderColor: 'black',
        borderRadius:'50%',
        borderWidth: 2,
        position:'absolute',
        top: 10,
        right:10,
        },
     bikeDotActive:{
        width:20,
        height:20,
        borderColor: 'white',
        borderRadius:'50%',
        borderWidth: 2,
        position:'absolute',
        top: 10,
        right:10,
        backgroundColor: 'gold'
        },
        carDot:{
            width:20,
            height:20,
            borderColor: 'black',
            borderRadius:'50%',
            borderWidth: 2,
            position:'absolute',
            top: 10,
            right:10,
            },
         carDotActive:{
            width:20,
            height:20,
            borderColor: 'white',
            borderRadius:'50%',
            borderWidth: 2,
            position:'absolute',
            top: 10,
            right:10,
            backgroundColor: 'gold'
            },
         busDot:{
                width:20,
                height:20,
                borderColor: 'black',
                borderRadius:'50%',
                borderWidth: 2,
                position:'absolute',
                top: 10,
                right:10,
                },
         busDotActive:{
                width:20,
                height:20,
                borderColor: 'white',
                borderRadius:'50%',
                borderWidth: 2,
                position:'absolute',
                top: 10,
                right:10,
                backgroundColor: 'gold'
                },
           bikeText:{
                
                    color: 'white',
                    marginTop: 5,
                   },
              bikeTextActive:{
                
                    color: 'black',
                    marginTop: 5,
                   },
              carText:{
                
                    color: 'white',
                    marginTop: 5,
                   },
              carTextActive:{
                
                    color: 'black',
                    marginTop: 5,
                   },
              busText:{
                
                    color: 'white',
                    marginTop: 5,
                   },
            busTextActive:{
                
                    color: 'black',
                    marginTop: 5,
                   },
});
