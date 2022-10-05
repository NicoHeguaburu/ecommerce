import React from 'react';
import { useState } from 'react';
import data from '../asyncMock';

export const CartContext = React.createContext();

const CartProvider = ({children}) => {

    
    const [productCartList, setProductCartList] = useState ([])


    const isInCart = (idProducto) => {
        const duplicatedProduct =   productCartList.some((item) => item.id === idProducto);
        return duplicatedProduct;
    }


    const addItem = (id, cantidad) => {
        data.map(i => {
            if (i.id === id){
                const cartItem = {
                    id: i.id,
                    title: i.title,
                    price: i.price,
                    imgUrl: i.imgUrl,
                    cantidad: cantidad
                }
                
                if(isInCart(cartItem.id)){
                    productCartList.map(x => {
                        if(x.id === cartItem.id){
                            x.cantidad = cartItem.cantidad + x.cantidad
                            cartItem.cantidad = x.cantidad
                            console.log(cartItem)
                        }
                    })
                }else{
                    setProductCartList([...productCartList, cartItem])
                }
            }
        })
    }

    const clearCart = () => {
        setProductCartList([])
    }

    const removeItem = (itemId) => {
        const removeItem = productCartList.filter(x => x.id !== itemId) 
        setProductCartList(removeItem);
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        productCartList.map(x => {
            totalPrice = x.price + totalPrice
        })
        return totalProducts
    }


    const getTotalProducts = () => {
        let totalProducts = 0
        productCartList.map(x => {
            totalProducts = x.cantidad + totalProducts
        })
        return totalProducts
    }


    return (
        <CartContext.Provider value={{addItem, clearCart, removeItem, getTotalPrice, getTotalProducts, productCartList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;