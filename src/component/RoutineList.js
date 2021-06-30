import axios from 'axios';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import RoutineDetail from './RoutineDetail';
import Header from './Header'


class RoutineList extends Component{
    state = { routineList:[] };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/auryvaldes/routineSkincare/list').then((response) => {
            this.setState({ routineList: response.data});
        });
    } 

    renderList = () => {
        return this.state.routineList.map((skin) => {
            return (
                <RoutineDetail key={skin.routine[0].id} skin={skin}/>
            );
        })

    }


    render() {
        console.log(this.state);
        return <ScrollView>
            <Header/>
            {this.renderList()}
            </ScrollView>
    }

    
}

export default RoutineList;