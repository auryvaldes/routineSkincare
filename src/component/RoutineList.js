import axios from 'axios';
import React, {Component} from 'react';
import {View, Text} from 'react-native';


class RoutineList extends Component{
    state = { routineList:[] };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/auryvaldes/routineSkincare/list').then((response) => {
            this.setState({ routineList: response.data});
        });
    } 

    renderList = () => {
        return this.state.routineList.map((skin) => {
            return <Text>{skin.routine[0].name}</Text>
        })

    }


    render() {
        console.log(this.state);
        return <View>{this.renderList()}</View>
    }
}

export default RoutineList;