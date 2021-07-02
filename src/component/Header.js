import React from 'react';
import {View, Image, Text} from 'react-native';

const Header = () => {
    const { imageStyle, headerStyle, textStyle } = styles;
    return(
        <View>
            <Image
                style={imageStyle}
                source={{uri: 'https://cdn.shopify.com/s/files/1/0037/7690/5283/files/skincare-routine-vector-illustration.jpg?v=1614231028'}}
            />
        <View style={headerStyle}>
            <Text style={textStyle}>  The skincare it's an important part of our body, not only for the women, 
                    actually in the east the men use the same skincare like the women.
                    So the firt that you need to know for to star your skincare routine is
                    what kind skin are you ?

            </Text>
        </View>
        </View>

    );
}

const styles = {
   
    imageStyle: {
        aspectRatio: 2,
        resizeMode: 'cover',
    },

    headerStyle: {
        margin: 20,
        backgroundColor: '#e9f1ef',
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ff503b4cf',
    }
}


export default Header;