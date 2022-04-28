import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tab';
import AuthNavigator from './user';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
    //const [ user, setUser ] = useState(null);
    const user = useSelector(state => state.auth.user);
    //const token = useSelector(state => state.auth.token);
    // console.log("MainNavigator: " + user);
    // console.log("MainNavigator: " + token);
    return (
        <NavigationContainer>
            { user
                ? <TabNavigator/>
                : <AuthNavigator/>
            }
        </NavigationContainer>
    )
}


export default MainNavigator;