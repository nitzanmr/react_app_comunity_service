import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
        
 /* general */
import WelcomeScreen from './App/Screens/WelcomeScreen';
import SendMessage from './App/Screens/SendMessage';
import inbox from './App/Screens/inbox';
import Profile from "./App/Screens/Profile_";

/* Volunteer */
import Main from "./App/Screens/Volunteer/Main";
import Event from './App/Screens/Volunteer/event';
import pdf from './App/Screens/Volunteer/pdf';
import Volunteer from './App/Screens/Volunteer/Volunteer';
import Certificates from './App/Screens/Volunteer/Certificates';
import Hours from './App/Screens/Volunteer/Hours';

/* manager */
import MainM from "./App/Screens/Manager/MainM";

/* manager regional  */
import MainMT from "./App/Screens/ManagerTo/MainMT";

/* manager school */
import MainMS from "./App/Screens/ManagerScool/MainMS";
import EventMS from "./App/Screens/ManagerScool/EventMS";
import HoursMan from "./App/Screens/ManagerScool/HoursMS";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        {/* general */}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        ></Stack.Screen>
        <Stack.Screen name="SendMessage" component={SendMessage}></Stack.Screen>
        <Stack.Screen name="inbox" component={inbox}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>

        {/* Volunteer */}

        <Stack.Screen
          name="Certificates"
          component={Certificates}
        ></Stack.Screen>
        <Stack.Screen name="Main" component={Main}></Stack.Screen>
        <Stack.Screen name="event" component={Event}></Stack.Screen>
        <Stack.Screen name="pdf" component={pdf}></Stack.Screen>
        <Stack.Screen name="Volunteer" component={Volunteer}></Stack.Screen>
        <Stack.Screen name="Hours" component={Hours}></Stack.Screen>

        {/* manager */}
        <Stack.Screen name="MainM" component={MainM}></Stack.Screen>

        {/* manager regional  */}
        <Stack.Screen name="MainMT" component={MainMT}></Stack.Screen>

        {/* manager school */}
        <Stack.Screen name="MainMS" component={MainMS}></Stack.Screen>
        {/* <Stack.Screen name="manEvent" component={event}></Stack.Screen> */}
        <Stack.Screen name="HoursMan" component={HoursMan}></Stack.Screen>
        <Stack.Screen name="EventMS" component={EventMS}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}