import React from 'react';
import { Plataform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryBreadScreen from '../../screens/CategoryBreadScreen';
import BreadDetailScreen from '../../screens/BreadDetailScreen';

import { COLORS } from '../../constants/colors';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const Stack = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Home'
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
            <Stack.Screen name='Home' component={CategoriesScreen} options={{title: 'Mi Pan'}}/>
            <Stack.Screen name='Bread' component={CategoryBreadScreen}
                options={ ({route}) => ({title: route.params.name})}/>
            <Stack.Screen name='Detail' component={BreadDetailScreen}
                options={ ({route}) => ({title: route.params.bread.name})}/>
        </Stack.Navigator>

    )
}

export default ShopNavigator;