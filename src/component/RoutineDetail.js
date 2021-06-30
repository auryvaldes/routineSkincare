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
                    <Text style={headerText}>{skin.type}</Text>
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
                Linking.openURL(skin.routine[0].url);
            }} />
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase'
    },

    imageStyle: {
        flex: 2,
        aspectRatio: 2,
        resizeMode: 'contain',
    }
}

export default RoutineDetail;