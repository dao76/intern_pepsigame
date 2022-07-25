import React, { createContext, useState } from 'react'
import { getproducts, getProductDetail } from './ProductService';
import  {getproductsss, cartadd,getcart} from "./ProductService";
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const { children } = props

       

    const getproducts = async () => {
        let products = await getproductsss();
        return products;
    }
    
    const getcartlist = async () => {
        let carts = await getcart();
        return carts;
    }
   

    const onGetProductDetail = async (id) => {
        try {
            const res = await getProductDetail(id)
            if (res.error == false) {
                return res.data
            }
        } catch (error) {
            console.log('onGetProductForHomePage', error);
        }
        return null
    }

   
    const onCartadd = async (item) => {
        try {
            const res = await cartadd(item)
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
                getcartlist,
                onCartadd,
                onGetProductDetail,
            }}>
            {children}
        </ProductContext.Provider>
    )

}