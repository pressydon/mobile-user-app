

import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { StyleSheet } from "react-native"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Card, Icon, Avatar  } from 'react-native-elements'


export default Faq=()=>{

    const [showFaqOne, setShowFaqOne] = useState(false)
    const [showFaqTwo, setShowFaqTwo] = useState(false)
    const [showFaqThree, setShowFaqThree] = useState(false)
    const [showFaqFour, setShowFaqFour] = useState(false)
    const [showFaqFive, setShowFaqFive] = useState(false)
    const handleClickOne = ()=>{
        setShowFaqOne(!showFaqOne)
    }
    const handleClickTwo = ()=>{
        setShowFaqTwo(!showFaqTwo)
    }
    const handleClickThree = ()=>{
        setShowFaqThree(!showFaqThree)
    }
    const handleClickFour = ()=>{
        setShowFaqFour(!showFaqFour)
    }
    const handleClickFive = ()=>{
        setShowFaqFive(!showFaqFive)
    }

  

    return(
        // <ScrollView>
        <View style={{backgroundColor:'white',width:'100%',height:'100%',padding:20}}>

        <View style={styles.questionContainer}>
        <TouchableOpacity style={styles.faqTop} onPress={handleClickOne}>
            <Text>1.Would Ice-Riders take over my bikes ?</Text>
            { showFaqOne 
               ?  <Icon
                // style={tw`  w-10 `}
                name='up'
                color='goldenrod'
                type='antdesign'
                 />
               :  <Icon
              
                // style={tw`  w-10 `}
                name='down'
                color='goldenrod'
                type='antdesign'
                 />
               }
        </TouchableOpacity>
        {showFaqOne && <View style={styles.faqBottom}>
            <Text>No, you only leverage on Ice-Riders License and enjoy seamless delivery operations.</Text>
        </View>}

    </View>

    <View style={styles.questionContainer}>
        <TouchableOpacity style={styles.faqTop} onPress={handleClickTwo}>
            <Text>2.How do I access customers ?</Text>
            { showFaqTwo 
               ?  <Icon
            //    style={tw`  w-10 `}
               name='up'
               color='goldenrod'
               type='antdesign'
                />
              :  <Icon
             
            //    style={tw`  w-10 `}
               name='down'
               color='goldenrod'
               type='antdesign'
                />
               }
        </TouchableOpacity>
        {showFaqTwo && <View style={styles.faqBottom}>
            <Text>All you need do is stay online on the Ice-Riders App, and demands will be directed to you.</Text>
        </View>}

    </View>

    <View style={styles.questionContainer}>
        <TouchableOpacity style={styles.faqTop}  onPress={handleClickThree}>
            <Text>3.What’s my financial benefit ?</Text>
            { showFaqThree 
               ?   <Icon
            //    style={tw`  w-10 `}
               name='up'
               color='goldenrod'
               type='antdesign'
                />
              :  <Icon
             
            //    style={tw`  w-10 `}
               name='down'
               color='goldenrod'
               type='antdesign'
                />
               }
        </TouchableOpacity>
        {showFaqThree && <View style={styles.faqBottom}>
            <Text>You get minimum of 10 delivery requests per rider and you earn not less than NGN20, 000 daily per Rider provided that all conditions are met.</Text>
        </View>}

    </View>

    <View style={styles.questionContainer}>
        <TouchableOpacity style={styles.faqTop} onPress={handleClickFour}>
            <Text>4.Partnership Payment Plan ?</Text>
            { showFaqFour 
              ?  <Icon
            //   style={tw`  w-10 `}
              name='up'
              color='goldenrod'
              type='antdesign'
               />
             :  <Icon
            
            //   style={tw`  w-10 `}
              name='down'
              color='goldenrod'
              type='antdesign'
               />
               }
        </TouchableOpacity>
        {showFaqFour && <View style={styles.faqBottom}>
            <Text>We charge our partners based on commission per request.</Text>
        </View>}

    </View>

    <View style={styles.questionContainer}>
        <TouchableOpacity style={styles.faqTop} onPress={handleClickFive}>
            <Text>5.Must I be in Benin City ?</Text>
            { showFaqFive 
               ?  <Icon
            //    style={tw`  w-10 `}
               name='up'
               color='goldenrod'
               type='antdesign'
                />
              :  <Icon
             
            //    style={tw`  w-10 `}
               name='down'
               color='goldenrod'
               type='antdesign'
                />
               }
        </TouchableOpacity>
        {showFaqFive && <View style={styles.faqBottom}>
            <Text>No, Ice-Riders License covers the Federal Republic of Nigeria and our apps are accessible online.</Text>
        </View>}

    </View>

        </View>
    // </ScrollView>
    )
}

const styles = StyleSheet.create({


faqTop:{
    display: 'flex',
    flexDirection:'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(116, 111, 111, 0.0)',
    padding: 15,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
},

faqBottom:{
    backgroundColor: 'rgba(20, 11, 1, 0.181)',
    padding: 10,
    fontSize: 20,
   
}


})