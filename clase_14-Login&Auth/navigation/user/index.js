import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from '../../screens/AuthScreen';
import { COLORS } from '../../constants/colors';

const Stack = createNativeStackNavigator();

const AuthNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Auth'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',                    
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen 
                name='Auth'
                component={AuthScreen}                
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;