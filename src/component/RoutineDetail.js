import React from 'react';
import { View, Text } from 'react-native';

import Item from './Item';

const RoutineDetail = props => {
    return (
    <Item>
        <Text>{props.skin.routine[0].name}</Text>
    </Item>
    );
};

export default RoutineDetail;