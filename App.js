import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import TweetScreen from './screens/TweetScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotificationScreen from './screens/NotificationScreen';
import SearchScreen from './screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitleStyle: false
      }}>
      {/* <Stack.Screen name="Home1" component={HomeScreen} /> */}
      <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="New Tweet" component={NewTweet} options={{ title: '' }} />
      <Stack.Screen name="Tweet Screen" component={TweetScreen} options={{ title: '' }} />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{ title: '' }} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}>
      <Tab.Screen name="Home1" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Search Screen" component={SearchScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Notification Screen" component={NotificationScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications-outline" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
