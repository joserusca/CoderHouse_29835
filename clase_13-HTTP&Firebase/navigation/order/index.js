import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrdersScreen from '../../screens/OrderScreen';
import { COLORS } from '../../constants/colors';

const Stack = createNativeStackNavigator();

const OrderNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Orders'
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
                name='Orders'
                component={OrdersScreen}
                options={{title: 'Ordenes'}}
            />
        </Stack.Navigator>
    )
}

export default OrderNavigator;