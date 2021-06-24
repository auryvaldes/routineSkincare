import React from 'react';
import { View } from 'react-native';

const Item = props => {
    return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        borderBottomWidth: 0,
        shadowColor: 'back',
        shadowOffSet: {width: 1, height: 1},
        shadowOpacity: 0.1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10
    }
};

export default Item;