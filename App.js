import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingLogo from './screens/OnboardingLogo';
import OnboardingOne from './screens/OnboardingOne';
import OnboardingThree from './screens/OnboardingThree';
import OnboardingTwo from './screens/OnboardingTwo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
import Signup from './screens/Signup';
import Login from './screens/Login';
import VerifyToken from './screens/VerifyToken';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPhone from './screens/ForgotPhone';
import Homepage from './screens/Homepage';
import InstantDelivery from './screens/InstantDelivery';
import InstantDeliveryInput from './screens/InstantDeliveryInput';
import DeliverySummary from './screens/DeliverySummary';
import PaymentOptions from './screens/PaymentOptions';
import InstantDeliveryArriving from './screens/InstantDeliveryArriving';
import InstantDeliveryArrived from './screens/InstantDeliveryArrived';
import InstantDeliveryDriverWaiting from './screens/InstantDeliveryDriverWaiting';
import PaystackColumn from './screens/ScheduleDelivery';
import ScheduleDelivery from './screens/ScheduleDelivery';
import ChooseDeliveryAgent from './screens/ChooseDeliveryAgent';
import ScheduleDeliveryInput from './screens/ScheduleDeliveryInput';
import ScheduleDeliverySummary from './screens/ScheduleDeliverySummary';
import ScheduleDeliveryFeedback from './screens/ScheduleDeliveryFeedback';
import chooseAnotherDeliveryAgent from './screens/chooseAnotherDeliveryAgent';
import ChooseDeliveryAgentFromAgents from './screens/ChooseDeliveryAgentFromAgents';
import PendingDeliveriesHomepage from './screens/PendingDeliveriesHomepage';
import PendingDeliveriesViewDetails from './screens/PendingDeliveriesViewDetails';
import PendingScheduleDeliveryDetails from './screens/PendingScheduleDeliveryDetails';
import PendingCancelScreen from './screens/PendingCancelScreen';
import CompletedDeliveryHistoryHomepage from './screens/CompletedDeliveryHistoryHomepage';
import CompletedViewDetails from './screens/CompletedViewDetails';
import CompletedDeliveryReport from './screens/CompletedDeliveryReport';
import CompletedReviewFeedbackScreen from './screens/CompletedReviewFeedbackScreen';
import CreateNewPassword from './screens/CreateNewPassword';
import Profile from './screens/Profile';
import ProfileSettings from './screens/ProfileSettings';
import AboutIceRiders from './screens/AboutIceRiders';
import TermsAndCondition from './screens/TermsAndCondition';
import PrivacyPolicy from './screens/PrivacyPolicy';
import Faq from './screens/Faq';
import ChatBox from './screens/ChatBox';
import CallNumber from './screens/CallNumber';
import VerifyForgottenPasswordToken from './screens/VerifyForgottenPasswordToken'
import {Provider} from 'react-redux'
import { store } from './store';
import { storeAuth } from './storeAuth';
import Loader from './components/Loader';
import { Constants } from 'expo';
import ChatBoxGifted from './screens/ChatBoxGifted';
import WalletScreen from './screens/WalletScreen';
// this will only work if you specify the bundleIdentifier in app.json
// let bundleId = Constants.manifest.ios.bundleIdentifier;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Stack = createNativeStackNavigator();


export default function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  // useEffect(()=>{

  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('token');
  //       if (value !== null) {
  //         setIsAuthenticated(!!value)
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };

  //   getData()

  // })

  // console.log('=-=',authToken)

  //  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetchUsers();

  //   const pusher = PusherService.initialize();

  //   const channel = pusher.subscribe('users');
  //   channel.bind('App\\Events\\UserUpdated', (data) => {
  //     const updatedUser = data.user;
  //     // Update the existing user or add the new user to the users state
  //     setUsers((prevUsers) =>
  //       prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
  //     );
  //   });

  //   return () => {
  //     pusher.unsubscribe('users');
  //   };
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('https://ryder-app-production.up.railway.app/api/admin/alluser');
  //     // const data = await response.json();
  //     const data = await response.data;
  //     setUsers(data.users);
  //     console.log('pusher calling....')
  //     // console.log(users)
  //   } catch (error) {
  //     console.log('Error fetching users:', error);
  //   }
  // };
 

  return (
    // <Provider store={storeAuth}>
    <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        
       <Stack.Navigator>

        <>

       <Stack.Screen
          name="OnboardingLogo"
          component={OnboardingLogo}
          options={{
            headerShown: false,
           }}
        />

       <Stack.Screen
          name="OnboardingOne"
          component={OnboardingOne}
          options={{
            headerShown: false,
           }}
        />

      <Stack.Screen
          name="OnboardingTwo"
          component={OnboardingTwo}
          options={{
            headerShown: false,
           }}
        />

      <Stack.Screen
          name="OnboardingThree"
          component={OnboardingThree}
          options={{
            headerShown: false,
           }}
        /> 
    
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
           }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
           }}
        />
         <Stack.Screen
          name="ForgotPhone"
          component={ForgotPhone}
          options={{
            headerShown: false,
           }}
        />

        <Stack.Screen
          name="VerifyToken"
          component={VerifyToken}
          options={{
            headerShown: false,
           }}
        />
          <Stack.Screen
          name="VerifyForgottenPasswordToken"
          component={VerifyForgottenPasswordToken}
          options={{
            headerShown: false,
           }}
        />

  </>

  <>

      <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: false,
           }}
        />

      <Stack.Screen
          name="WalletScreen"
          component={WalletScreen}
          options={{
            headerShown: false,
           }}
        />

    <Stack.Screen
          name="InstantDelivery"
          component={InstantDelivery}
         
        />
         
       {/* </Stack.Navigator>    */}



        {/* <Stack.Navigator> */}

      

      
         <Stack.Screen
          name="CallNumber"
          component={CallNumber}
          options={{
            headerShown: false,
           }}
        />

      

         <Stack.Screen
          name="InstantDeliveryInput"
          component={InstantDeliveryInput}
          options={{
            headerShown: false,
          }}
          
        />

      <Stack.Screen
          name="Delivery Summary"
          component={DeliverySummary}
          
        />
        <Stack.Screen
          name="Payment Options"
          component={PaymentOptions}
          
        />
         <Stack.Screen
          name="InstantDeliveryArriving"
          component={InstantDeliveryArriving}
          options={{ title: 'Instant Delivery' }}
        />
         <Stack.Screen
          name="InstantDeliveryArrived"
          component={InstantDeliveryArrived}
          options={{ title: 'Instant Delivery' }}
        />

        <Stack.Screen
          name="InstantDeliveryDriverWaiting"
          component={InstantDeliveryDriverWaiting}
          options={{ title: 'Instant Delivery' }}
        />
        

        <Stack.Screen
          name="Schedule Delivery"
          component={ScheduleDelivery}
          options={{
            headerTitleStyle: {
              color: 'black',
            },
            headerStyle: {
              backgroundColor: 'white',
            },
          }}

        />

          <Stack.Screen
          name="ChooseDeliveryAgent"
          component={ChooseDeliveryAgent}
          options={{
            headerShown: false,
          }}
            />

        <Stack.Screen
          name="ScheduleDeliveryInput"
          component={ScheduleDeliveryInput}
          options={{ title: 'Schedule Delivery' }}
        />

          <Stack.Screen
          name="Schedule Delivery Summary"
          component={ScheduleDeliverySummary}
          
        />
        
          <Stack.Screen
          name="ScheduleDeliveryFeedback"
          component={ScheduleDeliveryFeedback}
          options={{ title: 'Scheduled Delivery' }}
        />
           <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{ title: 'Create New Password' }}
        />

          <Stack.Screen
          name="ChooseAnotherDeliveryAgent"
          component={chooseAnotherDeliveryAgent}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="ChooseDeliveryAgentFromAgents"
          component={ChooseDeliveryAgentFromAgents}
          options={{
            headerShown: false,
          }}
        />
        
     

        <Stack.Screen
          name="PendingDeliveriesHompage"
          component={PendingDeliveriesHomepage}
          options={{
            headerShown: false,
            }}
        />

        <Stack.Screen
          name="PendingDeliveriesViewDetails"
          component={PendingDeliveriesViewDetails}
          options={{
            title: 'Pending Delivery Details',
          }}

        /> 

      <Stack.Screen
          name="PendingScheduleDeliveryDetails"
          component={PendingScheduleDeliveryDetails}
          options={{
            title: 'Pending Scheduled Details',
          }}

        />

      <Stack.Screen
          name="PendingCancelScreen"
          component={PendingCancelScreen}
          options={{
            title: 'Cancel Delivery',
          }}

        />
   

    <Stack.Screen
      name="CompletedDeliveryHistoryHomepage"
      component={CompletedDeliveryHistoryHomepage}
      options={{
        headerShown: false,
        }}
    />

    <Stack.Screen
      name="CompletedViewDetails"
      component={CompletedViewDetails}
      options={{
        title: 'Completed Delivery',
      }}

    /> 

    <Stack.Screen
      name="CompletedDeliveryReport"
      component={CompletedDeliveryReport}
      options={{
        title: 'Report Delivery',
      }}

    />

    <Stack.Screen
      name="CompletedReviewFeedbackScreen"
      component={CompletedReviewFeedbackScreen}
      options={{
        title: 'Review',
      }}

    />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          }}
      />

      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          title: 'Settings',
        }}

      /> 

      <Stack.Screen
        name="AboutIceRiders"
        component={AboutIceRiders}
        options={{
          title: 'About Ice-riders',
        }}

      />

      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        options={{
          title: 'Terms of Use',
        }}

      /> 

      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: 'Privacy Policy',
        }}

      /> 
      <Stack.Screen
        name="Faq"
        component={Faq}
        options={{
          title: 'Frequently Asked Questions',
        }}

      /> 
      <Stack.Screen
        name="ChatBox"
        component={ChatBox}
        options={{
          title: 'Chat With Agent',
        }}

      />   
      <Stack.Screen
        name="ChatBoxGifted"
        component={ChatBoxGifted}
        options={{
          title: 'Chat With Admin',
        }}

      />  

</>

       </Stack.Navigator>  
                 

      </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray'
  },
});
