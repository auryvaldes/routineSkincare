import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = (props) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity 
            onPress={props.buttonPress}
            style={buttonStyle}>
            <Text style={textStyle}> Mira la rutina aquí </Text>
        </TouchableOpacity>
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
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'gainsboro',
        bordenColor: 'black',
        marginLeft: 7,
        marginRight: 7
    }
}

export default Button;