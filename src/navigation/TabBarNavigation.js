import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// Tab-Navigators
import Home from '../components/Home/Home';
import Breweries from '../components/Breweries/Breweries';

const HomeIcon = (<Icon name={'home'} size={20} color="#900" />
);
const BreweriesIcon = (<Icon name="beer" size={20} color="#900" />
);

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeIcon
      // tabBarVisible: false //Once Josh finishes the Home Page
    },
  },
  Breweries: {
    screen: Breweries,
    navigationOptions: {
      tabBarLabel: 'Breweries',
      tabBarIcon: BreweriesIcon
    },
  },
},
{
  tabBarOptions: {
      activeTintColor: 'dodgerblue',
      style: {
        borderWidth: 1,
        borderTopWidth: 2,
      },
  },
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
});

export default Tabs;
