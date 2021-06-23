import React from 'react';
import {AppRegistry, View} from 'react-native';

import Header from './src/component/Header';

const App = () => {
    return <Header/>
}

AppRegistry.registerComponent('skincare', () => App);
