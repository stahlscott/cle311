import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import AboutScreen from '../screens/AboutScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />,
};

const DirectoryStack = createStackNavigator({
  Directory: DirectoryScreen,
});

DirectoryStack.navigationOptions = {
  tabBarLabel: 'Directory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} />
  ),
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  DirectoryStack,
  AboutStack,
});
