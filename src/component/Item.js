import React from 'react';
import { View } from 'react-native';

const Item = (props) => {
    return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
    viewStyle: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 30
    }
};

export default Item;