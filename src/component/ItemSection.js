import React from 'react';
import { View } from 'react-native';

const ItemSection = (props) => {
    const {viewStyle} = styles;
    
    return <View style={viewStyle}>{props.children}</View>
}

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flext-start',
        position: 'relative'
    }
}

export default ItemSection;