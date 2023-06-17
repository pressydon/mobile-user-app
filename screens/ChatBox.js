

import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { StyleSheet } from "react-native"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Card, Icon, Avatar  } from 'react-native-elements'
import { Chat, defaultTheme, MessageType } from '@flyerhq/react-native-chat-ui'
import { ReactNode } from 'react'



// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.floor(Math.random() * 16)
      const v = c === 'x' ? r : (r % 4) + 8
      return v.toString(16)
    })
  }

export default ChatBox=()=>{


    const [messages, setMessages] = useState([])
    const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' }
  
    const addMessage = (message) => {
      setMessages([message, ...messages])
    }
  
    const handleSendPress = (message) => {
      const textMessage = {
        author: user,
        createdAt: Date.now(),
        id: uuidv4(),
        text: message.text,
        type: 'text',
      }
      addMessage(textMessage)
    }



    const renderBubble = ({
        child,
        message,
        nextMessageInGroup,
      }) => {
        return (
          <View
            style={{
              backgroundColor: user.id !== message.author.id ? '#ffffff' : '#E7B717',
              borderBottomLeftRadius:
                !nextMessageInGroup && user.id !== message.author.id ? 20 : 0,
              borderBottomRightRadius:
                !nextMessageInGroup && user.id === message.author.id ? 20 : 0,
              borderColor: '#c2a946',
              borderWidth: 1,
              overflow: 'hidden',
            }}
          >
            {child}
          </View>
        )
      }


  

    return(
        // <ScrollView>
        <View style={{backgroundColor:'white',width:'100%',height:'100%',padding:20}}>
                 
            <Chat
                messages={messages}
                onSendPress={handleSendPress}
                user={user}
                renderBubble={renderBubble}
                theme={{
                  ...defaultTheme,
                  colors: { ...defaultTheme.colors, inputBackground: '#E7B717' },
                }}
            />
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