import axios from 'axios';
import React, {Component} from 'react';
import {View, Text} from 'react-native';


class RoutineList extends Component{
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/auryvaldes/routineSkincare/list')
        .then((response) => {
            console.log(response);
        })
    } 
    render() {
        return(
            <View>
                <Text>Routine List</Text>
            </View>
        );
    }
}

export default RoutineList;