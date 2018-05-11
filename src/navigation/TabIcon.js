import React from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const TabIcon = ({ focused, iconDefault, iconFocused, tintColor, size }) => {
    return (
        <Ionicons
            name={focused ? iconFocused : iconDefault}
            size={size}
            style={{ color: tintColor }}
        />
    );
};
TabIcon.propTypes = {
    focused: PropTypes.bool,
    iconDefault: PropTypes.string.isRequired,
    iconFocused: PropTypes.string.isRequired,
    tintColor: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    size: PropTypes.number
};
TabIcon.defaultProps = {
    focused: false,
    tintColor: 'white',
    size: 28
};

export default TabIcon;