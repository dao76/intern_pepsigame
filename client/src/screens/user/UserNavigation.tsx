import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login'
import TheLeChuongTrinh from './screens/TheLeChuongTrinh'
import Register from './screens/Register'


const Stack = createNativeStackNavigator()

const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='TheLeChuongTrinh' component={TheLeChuongTrinh} />

        </Stack.Navigator>
    )
}

export default UserNavigation
