import React from 'react';
import { View } from 'react-native';

const ItemSection = (props) => {
    return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
    viewStyle: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        shadowColor: 'back',
        shadowOffSet: {width: 1, height: 1},
        shadowOpacity: 0.1,
    }
};

export default ItemSection;