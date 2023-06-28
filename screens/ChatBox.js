

import { useNavigation } from "@react-navigation/native"
import { useState, useEffect, useLayoutEffect } from "react"
import { StyleSheet } from "react-native"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Card, Icon, Avatar  } from 'react-native-elements'
import { Chat, defaultTheme, MessageType } from '@flyerhq/react-native-chat-ui'
import { ReactNode } from 'react'
import { useSelector } from "react-redux"
import { selectDeliveryDetails } from "../slices/navSlice"
import { selectAgentInfo, selectUserInfo } from "../slices/authSlice"
import axios from "axios"



// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.floor(Math.random() * 16)
      const v = c === 'x' ? r : (r % 4) + 8
      return v.toString(16)
    })
  }

export default ChatBox=({route})=>{


  const userInfo = useSelector(selectUserInfo)

  const {item} = route.params
 
  const [allMessages, setAllMessages] = useState([])
  const [allPrevMessages, setAllPrevMessages] = useState([])
  
    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessages] = useState([])
    let receivedMessages = [] 
   
    console.log(item)

    const user = {
      id: userInfo.user.id,
      name: 'Jane Dog',
      avatar: 'https://example.com/avatar.jpg',
    };

    const url = 'https://ryder-app-production.up.railway.app/api/user/message'
  
  

    const headers = {
      'Authorization': `Bearer ${userInfo.token}`,
      'Content-Type': 'application/json',
    };

    const handleSendPress = async(message) => {
      const textMessage = {
        author: user,
        created_at: Date.now(),
        id: uuidv4(),
        text: message.text,
        type: 'text',
      
      }
      addMessage(textMessage)


      const data = {
        content: message.text,
        receiver_id: `${item.driver_id}`,
        receiver_type: "driver"
      };
      console.log(message.text)
    

      try {

    const postedMessage = await axios.post(url, data, { headers })

        console.log(postedMessage)
        
      } catch (error) {
        console.error(error.response)
        
      }
    }

    let returnedMessages;

    useEffect(()=>{

      const fetchMessages=async()=>{

        try {
        returnedMessages = await axios.get('https://ryder-app-production.up.railway.app/api/user/messages', { headers })
          console.log('all-messages',returnedMessages.data.messages)

          setAllMessages(returnedMessages.data.messages)

        } catch (error) {
          console.error(error.response)
        }

      }


      fetchMessages()

    }, [])

  

    receivedMessages = allMessages
    .filter((messageObj)=> messageObj.receiver !== messageObj.sender)
    .map((messageObj)=>{
      const textMessage = {
        author: messageObj.sender,
        // author: user,
        created_at: new Date(messageObj.created_at),
        id: uuidv4(),
        text: messageObj.content,
        type: 'text',
      }
      // console.log(messageObj)
      return textMessage

    })

    const addMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage].sort((b, a) => b.id - a.id));
    };
   
 
    const updatedMessages = [...messages, ...receivedMessages].reverse();
  

    console.log(updatedMessages)

    const sortedMessages = updatedMessages.sort((a,b)=> a.created_at - b.created_at)

    console.log('----pp---',updatedMessages)

    const handlePreviewDataFetched = ({
      message,
      previewData,
    }) => {
      setMessages(
        messages.map((m) =>
          m.id === message.id ? { ...m, previewData } : m
        )
      )
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
       
        <View style={{backgroundColor:'white',width:'100%',height:'100%',padding:20}}>
                 
            <Chat
                messages={sortedMessages}
                onSendPress={handleSendPress}
                user={user}
                renderBubble={renderBubble}
                onPreviewDataFetched={handlePreviewDataFetched}
                theme={{
                  ...defaultTheme,
                  colors: { ...defaultTheme.colors, inputBackground: '#E7B717' },
                }}
            />
        </View>
   
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