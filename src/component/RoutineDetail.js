import React from 'react';
import { View, Text } from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';


const RoutineDetail = props => {
    return (
        <Item>
            <ItemSection>
                <View style={styles.headerContainer}>
                <Text>{props.skin.routine[0].name}</Text>
                </View>
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}

export default RoutineDetail;