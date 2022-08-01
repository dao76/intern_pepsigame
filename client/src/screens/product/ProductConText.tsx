import React, { createContext, useState } from 'react'

import { getproductsss, Productadd, GetMyGiftById, UpdateCoin, UpdatePlay, UpdatePlayFree } from "./ProductService";
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const { children } = props

    const getproducts = async () => {
        let products = await getproductsss();
        return products;
    }
    const onGetMyGiftById = async (id) => {
        try {
            const res = await GetMyGiftById(id)
            if (res.error == false) {
                return res.data
            }
        } catch (error) {
            console.log('onGetProductForHomePage', error);
        }
        return null
    }
    const onUpdatePlay = async (id, numberexchange) => {
        try {
            const res = await UpdatePlay(id, numberexchange)
            if (res.error == false) {
                return res.data
            }
        } catch (error) {
            console.log('onGetProductForHomePage', error);
        }
        return null
    }
    const onUpdateFreeNumber = async (id, numberfree) => {
        try {
            const res = await UpdatePlayFree(id, numberfree)
            if (res.error == false) {
                return res.data
            }
        } catch (error) {
            console.log('onGetProductForHomePage', error);
        }
        return null
    }
    const onUpdatCoin = async (id, coin) => {
        try {
            const res = await UpdateCoin(id, coin)
            if (res.error == false) {
                return res.data
            }
        } catch (error) {
            console.log('onGetProductForHomePage', error);
        }
        return null
    }
    const onProductadd = async (item) => {
        try {
            const res = await Productadd(item)
            return res.status;
        } catch (error) {
            console.log('error', error)
        }
        return false
    }

    return (
        <ProductContext.Provider
            value={{
                getproducts,
                onProductadd, onGetMyGiftById,
                onUpdatCoin, onUpdatePlay,
                onUpdateFreeNumber
            }}>
            {children}
        </ProductContext.Provider>
    )

}