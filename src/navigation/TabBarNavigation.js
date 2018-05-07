import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

// Tab-Navigators
import Home from '../components/Home/Home';
import Breweries from '../components/Breweries/Breweries';

const HomeIcon = (<Icon name="home" size={30} color="#900" />
);
HomeIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

const BreweriesIcon = (<Icon name="beer" size={35} color="#900" />
);
BreweriesIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeIcon,
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
