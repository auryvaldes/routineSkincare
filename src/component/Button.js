import React from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';


const Button = (props) => {
    const {buttonStyle, textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Ripple 
            rippleColor='#efaca0'
            rippleOpacity={0.9}
            rippleDuration={2000}
            rippleSize={500}
            rippleContainerBorderRadius={30}
            onPress={props.buttonPress}
            style={buttonStyle}>
                <Text style={textStyle}> Show me more </Text>
            </Ripple>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 6,
        paddingBottom: 6,
        color: 'black',
        textAlign: 'center'
    },

    buttonStyle: {
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#FFA384',
    },

    viewStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:5,
        paddingBottom: 5,

    }
}

export default Button;