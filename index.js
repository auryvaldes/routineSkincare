import React from 'react';
import {AppRegistry, View} from 'react-native';

import Header from './src/component/Header';
import RoutineList from './src/component/RoutineList';

const App = () => {
    return (
        <View>
            <Header/>
            <RoutineList/>
        </View>
    ); 
}

AppRegistry.registerComponent('skincare', () => App);
