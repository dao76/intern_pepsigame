import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home_Page from '../product/screens/Home_Page';
import Gift from '../product/screens/Gift';
import Mygif from '../product/screens/Mygif';
import Guide from '../product/screens/Guide';
import GiftInfo from '../product/screens/GiftInfo';
import Collection from '../product/screens/Collection';
import Mainplay from './screens/Mainplay';
import Code_Scan from './screens/Code_Scan';
import Nhanqua from './screens/Nhanqua';
const Stack = createNativeStackNavigator()

const ProductNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='Home_Page' component={Home_Page} />
            <Stack.Screen name='Gift' component={Gift} />
            <Stack.Screen name='Mygif' component={Mygif} />
            <Stack.Screen name='Guide' component={Guide} />
            <Stack.Screen name='GiftInfo' component={GiftInfo} />
            <Stack.Screen name='Collection' component={Collection} />
            <Stack.Screen name='Code_Scan' component={Code_Scan} />
            <Stack.Screen name='Mainplay' component={Mainplay} />
            <Stack.Screen name='Nhanqua' component={Nhanqua} />


        </Stack.Navigator>
    )
}

export default ProductNavigation
