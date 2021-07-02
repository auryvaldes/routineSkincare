import React, { Component } from 'react';
import { View } from 'react-native';
import ActionBar from 'react-native-action-bar';

class Menu extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ActionBar
                    containerStyle={styles.bar}
                    title={'Skincare Routine'}
                    leftIconName={'menu'}
                    backgroundColor={'rgb(166, 199, 201)'}
                    onLeftPress={() => console.log('Left!')}
                    onTitlePress={() => console.log('Title!')}
                    rightIcons={[
                        {
                            name: 'star-outline',
                            onPress: () => console.log('Right Star !'),
                        }
                    ]}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 30
    }
};

export default Menu;