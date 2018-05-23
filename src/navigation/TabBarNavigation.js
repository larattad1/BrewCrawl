import React from 'react';
import { Platform } from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

// Imported Pages
import TabIcon from './TabIcon';
import Home from '../components/Home/Home';
import Breweries from '../components/Breweries/Breweries';
import BrewSearch from '../components/BrewSearch/BrewSearch';
//import BrewSearch from '../search/AutoComplete';

const HomeIconIOS = ({ focused, tintColor }) => (
  <TabIcon iconDefault='ios-home-outline' iconFocused='ios-home' focused={focused} color={tintColor} />
);
HomeIconIOS.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};
const HomeIconAndroid = ({ focused, tintColor }) => (
  <TabIcon iconDefault='md-home' iconFocused='md-home' focused={focused} color={tintColor} />
);
HomeIconAndroid.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};
const BrewIconIOS = ({ focused, tintColor }) => (
  <TabIcon iconDefault='ios-beer-outline' iconFocused='ios-beer' focused={focused} color={tintColor} />
);
BrewIconIOS.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};
const BrewIconAndroid = ({ focused, tintColor }) => (
  <TabIcon iconDefault='md-beer' iconFocused='md-beer' focused={focused} color={tintColor} />
);
BrewIconAndroid.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};
const BrewSearchIconIOS = ({ focused, tintColor }) => (
  <TabIcon iconDefault='ios-search-outline' iconFocused='ios-search' focused={focused} color={tintColor} />
);
BrewSearchIconIOS.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};
const BrewSearchIconAndroid = ({ focused, tintColor }) => (
  <TabIcon iconDefault='md-search' iconFocused='md-search' focused={focused} color={tintColor} />
);
BrewSearchIconAndroid.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      ...Platform.select({
        ios: {
          tabBarIcon: HomeIconIOS
        },
        android: {
          tabBarIcon: HomeIconAndroid
        }
      }),
    }
    // tabBarVisible: false //Once Josh finishes the Home Page
    //  },
  },
  Breweries: {
    screen: Breweries,
    navigationOptions: {
      tabBarLabel: 'Breweries',
      ...Platform.select({
        ios: {
          tabBarIcon: BrewIconIOS
        },
        android: {
          tabBarIcon: BrewIconAndroid
        }
      }),
    }
  },
  BrewSearch: {
    screen: BrewSearch,
    navigationOptions: {
      tabBarLabel: 'Search',
      ...Platform.select({
        ios: {
          tabBarIcon: BrewSearchIconIOS
        },
        android: {
          tabBarIcon: BrewSearchIconAndroid
        }
      }),
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      showIcon: true,
      style: {
        borderWidth: 1,
        borderTopWidth: 2,
        backgroundColor: '#715f31',
      },
    },
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  });

export default Tabs;
