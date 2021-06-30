import React from 'react';
import {View, Image} from 'react-native';

const Header = () => {
    const {viewStyle, imageStyle} = styles;
    return(
        <View style={viewStyle}>
            <Image
                style={imageStyle}
                source={{uri: 'https://cdn.shopify.com/s/files/1/0037/7690/5283/files/skincare-routine-vector-illustration.jpg?v=1614231028'}}
            />
        </View>
    );
}

const styles = {
    viewStyle: {
        position: 'relative'
    },
   
    imageStyle: {
        aspectRatio: 2,
        resizeMode: 'contain',
    }
}


export default Header;