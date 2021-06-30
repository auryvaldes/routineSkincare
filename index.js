import React from 'react';
import {AppRegistry, View} from 'react-native';


import RoutineList from './src/component/RoutineList';

const App = () => {
    return (
        <View>

            <RoutineList/>
        </View>
    ); 
}


AppRegistry.registerComponent('skincare', () => App);
