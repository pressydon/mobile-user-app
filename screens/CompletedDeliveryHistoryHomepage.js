import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet,Button, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { Card, Icon,  } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import HomeNavBottom from '../components/HomeNavBottom';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { selectAllDeliveries } from '../slices/deliveries';
import { useSelector } from 'react-redux';

const data = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Makeup kits',
        deliveryID: 12534,
        status:'cancelled delivery'
        
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Watch',
        deliveryID: 12534,
        status:'before delivery'
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Milkshake',
        deliveryID: 12534,
        status:'after delivery'
      
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/3640734/pexels-photo-3640734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Beard oil',
        deliveryID: 12534,
        status:'after delivery'
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Pancake',
        deliveryID: 12534,
        status:'cancelled delivery'
    },
    
  ]

export default function CompletedDeliveryHistoryHomepage() {

    const navigation = useNavigation()


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [showDate, setShowDate] = useState(new Date().toLocaleDateString())
//   const [show, setShow] = useState(false)
  const [removeButton, setRemoveButton] = useState(false)
  const [completedButton, setCompletedButton] = useState(false)
  const [cancelledButton, setCancelledButton] = useState(false)
  const [showTime, setShowTime] = useState('');



    const [leftButton, setLeftButton] = useState(styles.completedButton);
  const [rightButton, setRightButton] = useState('')
  const [isTextGoldLeft, setIsTextGoldLeft] = useState(styles.textGold)
  const [isTextGoldRight, setIsTextGoldRight] = useState('')
  const [filteredDelivery, setFilteredDelivery] = useState([])
  // const [filteredDeliveryCompleted, setFilteredDeliveryCompleted] = useState([])

  const allDeliveries = useSelector(selectAllDeliveries)

console.log(allDeliveries)

  
  useEffect(()=>{

      // Filter the data array based on the condition
      const filteredData = allDeliveries.filter((d) => d.status === 'at drop off');
      setFilteredDelivery(filteredData);
    

  },[])
  


  const handleLeftButton=()=>{

    setLeftButton(styles.completedButton);
    setRightButton('')
    setIsTextGoldLeft(styles.textGold)
    setIsTextGoldRight('')
    const filteredData = allDeliveries.filter((d) => d.status === 'at drop off');
    setFilteredDelivery(filteredData);
   
    setCompletedButton(true)
  }

  const handleRightButton=()=>{
    setLeftButton('');
    setRightButton(styles.completedButton)
    setIsTextGoldRight(styles.textGold)
    setIsTextGoldLeft('')

    const filteredData = allDeliveries.filter((d) => d.status === 'cancelled');
    setFilteredDelivery(filteredData);
   
    setCompletedButton(false)
  }

  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {


     setShowDate(date.toLocaleDateString())
      setShowTime(date.toLocaleTimeString());

      hideDatePicker();
     
      
      setRemoveButton(true)
     
 
  };
// console.log(filteredDelivery)


    
   

 
  return ( 
   <SafeAreaView style={styles.homeContainer}>
      
      <View style={{width:'100%', height:'25%', backgroundColor:'black'}}>

        <Text style={{color:'white', paddingTop:30,paddingLeft:20, fontWeight:'bold',fontSize:18}}>Delivery History</Text>

        {   removeButton ?
                    
                     <TouchableOpacity style={styles.calender } >
                         <Button color='black' title={showDate } onPress={showDatePicker} /> 
                         <Icon
                
                            // style={{ margin:20}}
                            name='keyboard-arrow-down'
                            color='black'
                            type='materialicons'
                            size={20}
                            />
                     </TouchableOpacity>
                   
                    :
                     <TouchableOpacity style={styles.calender} >
                    <Button color='black' title={new Date().toLocaleDateString()} onPress={showDatePicker} />
                    <Icon
              
                //   style={{ margin:20}}
                  name='arrowdown'
                  color='black'
                  type='antdesign'
                  size={20}
              />
                    </TouchableOpacity>
                    }
                      
                


                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        // date={selectedDate}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        
                      />

            <View style={{display:'flex', flexDirection: 'row', backgroundColor:'white',width:270,height:40,alignSelf:'center',borderRadius:20, alignItems:'center',justifyContent:'space-around',borderWidth:2,borderColor:'gold'}}>
                <TouchableOpacity  onPress={handleLeftButton} style={leftButton} >
                    <Text style={[isTextGoldLeft,{fontSize: 15,fontWeight:'bold',textAlign:'center'}]}>Completed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={rightButton} onPress={handleRightButton} >
                    <Text style={[isTextGoldRight,{fontSize: 15,fontWeight:'bold',textAlign:'center'}]}>Cancelled</Text>
                </TouchableOpacity>
            </View>

                  

        </View >

        <View style={{height: '69%', marginTop:-20}}>

            <View style={{display: 'flex', flexDirection:'row',alignItems:'center', backgroundColor: "white",
                height: 40,width:'80%', alignSelf:'center', borderRadius: 10, shadowColor: '#000',
                shadowOffset: {
                width: 0,
                height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5, }}>

            <Icon
              //  onPress={() => navigation.goBack(null)}
                  style={{marginLeft:10 }}
                  name='search'
                  color='lightgray'
                  type='fontawesome'
                  size={22}
              />

            <TextInput
                  style={styles.input}
                  placeholder="Search..."
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="addressCityAndState"
                  // value={dropoffLocation}
                  // onChangeText={(text) => setDropoffLocation(text)}
              />

            <Icon
              //  onPress={() => navigation.goBack(null)}
                  style={{}}
                  name='x'
                  color='lightgray'
                  type='feather'
                  size={22}
              />

            </View>

          {filteredDelivery.length ? 
           <View style={{alignSelf:'center'}}>

      <FlatList
                //   style={styles.content}
                  //  data={completedButton? filteredDeliveryCompleted : filteredDelivery}
                  data={filteredDelivery}
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                 renderItem={({item})=>(
                    <Card>

                   
                 <TouchableOpacity
                      style={styles.item}
                onPress={()=> navigation.navigate('CompletedViewDetails', {item: item})}
                  >
                  <View style={{display:'flex',alignItems:"center", justifyContent:"center",}}>
             
               <Image
                 style={{width: 140, height: 70, resizeMode:'cover',borderRadius:5,marginTop:-10,alignSelf:'center' }}
                source={{ uri: item.img ? item.img : 'https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'}} 
             />
             <View style={{width:150,margin:10 }}>
             <Text  style={{ fontSize:15,marginBottom:5 }} >Parcel name: {item.parcelName}</Text>
             <Text  style={{ fontSize:15, marginBottom:10}}   >Delivery Id: {item.id}</Text>
             </View>

            </View>

           <TouchableOpacity style={{alignSelf:'center', backgroundColor:'goldenrod',padding:10, borderRadius:5}} >
            <Text style={{color:'white'}}>View Details</Text>
           </TouchableOpacity>
        </TouchableOpacity>
        </Card>
    )}
      />

            </View>
            :
            <View style={{display:'flex', alignItems:'center', justifyContent:'center',alignSelf:'center'}}> 

            <Image
                 style={{width: 300, height: 200, resizeMode:'cover',marginTop:70 }}
                 source={require('../assets/emptyPending.png')}
             />
             <Text style={{fontSize:20}}>No Pending Deliveries</Text>

       </View>
}
       


        </View>

        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', backgroundColor: 'black', paddingTop:20, paddingBottom:30, paddingRight:20, paddingLeft: 30 }}>

<TouchableOpacity onPress={()=>navigation.navigate('Homepage')} >

<Icon
 name='home'
 color='white'
 type='entypo'
 size={38}
/>
<Text style={{color: 'white',fontSize: 12, paddingLeft:3}}>Home</Text>      
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('PendingDeliveriesHompage')} style={{marginRight: -15}} >
 <Icon
    name='motorcycle'
    color='white'
    type='fontawesome'
    size={38}
    />
<Text style={{color: 'white', fontSize: 12}}>Pending Delivery</Text> 
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('CompletedDeliveryHistoryHomepage')}>
<Icon
    name='back-in-time'
    color='#E7B717'
    type='entypo'
    size={38}
    />
<Text style={{color: '#E7B717',fontSize: 12}}>Delivery History</Text>
    
</TouchableOpacity>

</View>
           
        {/* <HomeNavBottom /> */}
        
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
  input: {
    // backgroundColor: "rgba(218, 218, 218, 0.4)",
    height: 40,
    // marginTop: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    width: '80%'
  },
 
  button: {
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
  dropdown: {
      // margin: 2,
      height: 50,
      borderBottomColor: 'gray',
      borderRadius: 10,
      width:'90%',
      backgroundColor: 'rgba(218, 218, 218, 0.4)'
    },
    item:{
        display:'flex',
        flexDirection:'column',
        // backgroundColor:'red',
        margin:5,
        width:120,
        height:180

    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    calender:{
      backgroundColor: 'white',
      height: 40,
      width:150,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      color: 'black',
      alignSelf: 'flex-end',
      marginBottom: 20,
      marginRight:10,
      borderRadius:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    completedButton:{
         backgroundColor:'black',
         width:170,
         height:'100%',
         alignSelf:'center',
          textAlign:'center',
          paddingTop:10,
           borderRadius: 15,
            marginLeft:-8,
            marginRight:-6,
        },
        textGold:{
            color: 'goldenrod'
        }
  
});
