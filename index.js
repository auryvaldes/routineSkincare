import React from 'react';
import {AppRegistry, View} from 'react-native';

import RoutineList from './src/component/RoutineList';
import Menu from './src/component/Menu';

const App = () => {
    return (
        <View>
            <Menu/>
            <RoutineList/>
        </View>
    ); 
}

AppRegistry.registerComponent('skincare', () => App);
