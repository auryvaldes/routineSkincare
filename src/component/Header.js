import React from 'react';
import {View, Image} from 'react-native';

const Header = () => {
    const { imageStyle} = styles;
    return(
        <View>
            <Image
                style={imageStyle}
                source={{uri: 'https://cdn.shopify.com/s/files/1/0037/7690/5283/files/skincare-routine-vector-illustration.jpg?v=1614231028'}}
            />
        </View>
    );
}

const styles = {
   
    imageStyle: {
        aspectRatio: 2,
        resizeMode: 'cover',
    }
}


export default Header;