import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from '../screens/user/UserNavigation'
import ProductNavigation from '../screens/product/ProductNavigation'
import { UserConText } from '../screens/user/UserContext';

export default function Navigation(props) {
    const { isLoggedIn } = useContext(UserConText);
    return (
        <NavigationContainer>
            {
                isLoggedIn == true ?
                    <ProductNavigation /> :
                    <UserNavigation />
            }
        </NavigationContainer>
    )
}


