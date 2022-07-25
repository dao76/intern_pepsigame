import React, { createContext, useState, useEffect } from 'react';
import { login, register } from './UserService'
import AsyncStorage from '@react-native-async-storage/async-storage';
import contants from '../../utils/contants';
export const UserConText = createContext();

export const UserConTextProvider = (props) => {
    const { children } = props
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLogin = async (username, password) => {
        try {
            const result = await login(username, password);

            if (result && result.token) {
                // lưu token vào storage
                await AsyncStorage.setItem(contants.STORAGE_KEY, result.token);
                setIsLoggedIn(true);
                return true;
            }
        } catch (error) {
            setIsLoggedIn(true);
            console.log('onLogin error: ', error);
        }
    }

    const onRegister = async (username, password, name) => {
        try {
            const res = await register(username, password, name)
            return res.status;
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <UserConText.Provider
            value={{
                isLoggedIn,
                onLogin,
                onRegister, setIsLoggedIn
            }}>
            {children}
        </UserConText.Provider>
    )
}