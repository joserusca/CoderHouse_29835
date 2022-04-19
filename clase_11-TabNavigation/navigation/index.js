import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tab';

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}


export default MainNavigator;