import React from 'react';
import {View, Text} from 'react-native';

const Item = (props) => {
    const {viewStyle} = styles;

    return <View style={viewStyle}>{props.children}</View>
};

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        shadowColor: 'back',
        shadowOffSet: {width: 1, height: 1},
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10
    }
};

export default Item;