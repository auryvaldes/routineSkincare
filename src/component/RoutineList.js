import axios from 'axios';
import React, {Component} from 'react';
import {View, Text} from 'react-native';


class RoutineList extends Component{
    state = { reoutineList:[] };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/auryvaldes/routineSkincare/list').then((response) => {
            this.setState({ routineList: response.data});
        });
    } 
    render() {
        console.log(this.state);
        return(
            <View>
                <Text>Routine List</Text>
            </View>
        );
    }
}

export default RoutineList;