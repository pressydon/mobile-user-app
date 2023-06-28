

import { useNavigation } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Card, Icon, Avatar  } from 'react-native-elements'
import { GiftedChat } from 'react-native-gifted-chat';
import { ReactNode } from 'react'
import { useSelector } from "react-redux"
import { selectDeliveryDetails } from "../slices/navSlice"
import { selectUserInfo } from "../slices/authSlice"
import axios from "axios"



const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16)
    const v = c === 'x' ? r : (r % 4) + 8
    return v.toString(16)
  })
}


export default ChatBoxGifted=({route})=>{


  const userInfo = useSelector(selectUserInfo)

  const {item} = route.params
  
  const [allMessages, setAllMessages] = useState([])
  const [messages, setMessages] = useState([])
  let receivedMessages = [] 
   
  
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
        // id: uuidv4(),
        text: message.text,
        type: 'text',
      }
      // addMessage(textMessage)

      // const data = {
      //   content: message.text,
      //   receiver_id: `${item.driver_id}`,
      //   receiver_type: "driver"
      // };
      // console.log(message.text)
    

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

    // console.log('-----',allMessages)

    receivedMessages = allMessages
    .filter((messageObj)=> messageObj.receiver !== messageObj.sender)
    .map((messageObj)=>{
      const textMessage = {
        user:{
          _id:messageObj.sender,
          name:'User'
        
        } ,
        createdAt: new Date(messageObj.created_at),
        _id: uuidv4(),
        text: messageObj.content,
        type: 'text',
      }

      return textMessage

    })

//     const WIDTH = 200; // or any number
// const HEIGHT = 2000; // or any number

// const loadingWrapper = getByTestId(TEST_ID.LOADING_WRAPPER)
// fireEvent(loadingWrapper, 'layout', {
//   nativeEvent: {
//     layout: {
//       width: WIDTH,
//       height: HEIGHT,
//     },
//   },
// })

   

    const onSend = (newMessages = []) => {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessages)
        );
      };







return (
  <GiftedChat
//   messages={updatedMessages}
  messages={messages}
  onSend={(newMessages) => onSend(newMessages)}
  user={{
    _id: userInfo.user.id, // Provide a unique user ID
  }}
  />
)

}



