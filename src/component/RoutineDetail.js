import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';


const RoutineDetail = ({ skin }) => {
    const { headerContainer, headerText, imageStyle } = styles;

    return (
        <Item>
            <ItemSection>
                <View style={headerContainer}>
                    <Text style={headerText}>{skin.routine[0].name}</Text>
                </View>
            </ItemSection>

            <ItemSection>
                <Image 
                style={imageStyle}
                source={{uri: skin.routine[0].image}}
                />
            </ItemSection>

            <ItemSection>
            <Button buttonPress={ () =>{
                console.log("Hola")
                {/* Linking.openURL(skin.routine[0].url); */}
            }} />
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    
    headerText: {
        fontSize: 33,
        fontFamily: 'serif',
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign:'center',
        color: '#7FB2B6'
    },

    imageStyle: {
        flex:1,
        aspectRatio: 2.4,
        resizeMode: 'cover',
    }
}

export default RoutineDetail;