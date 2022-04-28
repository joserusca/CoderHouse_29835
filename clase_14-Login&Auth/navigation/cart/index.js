import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../../screens/CartScreen';
import { COLORS } from '../../constants/colors';

const Stack = createNativeStackNavigator();

const CartNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Cart'
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
                name='Cart'
                component={CartScreen}
                options={{title: 'Carrito'}}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;