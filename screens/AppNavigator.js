import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './Patient/HomePage';
import DoctorList from './Patient/DoctorList';
import VideoCallingInfo from './Patient/VideoCallingInfo';
import VidCallingAppointment from './Patient/VidCallingAppointment';
import VidCallingPayment from './Patient/VidCallingPayment';
import VideoCallingFinal from './Patient/VideoCallingFinal';
import DocAppointment from './Patient/DocAppointment';
import DocAppointmentFinal from './Patient/DocAppointmentFinal';
import AskQuestion from './Patient/AskQuestion';
import NewsFeed from './Patient/NewsFeed';
import Blog from './Patient/Blog';
import BlogDetails from './Patient/BlogDetails';
import HealthCheckUp from './Patient/HealthCheckUp';
import HealthCheckUpDetails from './Patient/HealthCheckUpDetails';
import COLORS, { normalize } from './Constants/colorCode';

function HomeStack({navigation}) {
  return (
    <HomePage navigation={navigation}/>
  );
}
function DoctorChatStack({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Doctor Chat </Text>
    </View>
  );
}
function ProfileStack({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>profile </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabBar() {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;

            if (route.name === 'Home') {
              iconName = 'home-outline'
              iconColor = focused ? '#547896' : '#595959';
            } else if (route.name === 'Doctor Chat') {
              iconName = 'chatbubble-outline'
              iconColor = focused ? '#547896' : '#595959';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline'
              iconColor = focused ? '#547896' : '#595959';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#547896',
          inactiveTintColor: 'gray',
          tabStyle: {elevation: 20, backgroundColor: '#fff'},
          labelStyle: {fontSize: normalize(11)}
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Doctor Chat" component={DoctorChatStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
  );
}

function tabStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Home">
      <Stack.Screen name="Home" component={TabBar} />
      <Stack.Screen name="DoctorList" component={DoctorList} />
      <Stack.Screen name="VideoCallingInfo" component={VideoCallingInfo} />
      <Stack.Screen name="VidCallingAppointment" component={VidCallingAppointment} />
      <Stack.Screen name="VidCallingPayment" component={VidCallingPayment} />
      <Stack.Screen name="VideoCallingFinal" component={VideoCallingFinal} />
      <Stack.Screen name="DocAppointment" component={DocAppointment} />
      <Stack.Screen name="DocAppointmentFinal" component={DocAppointmentFinal} />
      <Stack.Screen name="AskQuestion" component={AskQuestion} />
      <Stack.Screen name="NewsFeed" component={NewsFeed} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
      <Stack.Screen name="HealthCheckUp" component={HealthCheckUp} />
      <Stack.Screen name="HealthCheckUpDetails" component={HealthCheckUpDetails} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Root" component={tabStack} />
      </Drawer.Navigator>
  );
}