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
        // productCartList.map(x => {
        //     const priceItem = x.price * x.cantidad
        //     const totalPrice = priceItem + totalPrice
        //     console.log(totalPrice)
        // })
    }


    const getTotalProducts = () => {
        // productCartList.map(x => {
        //     const totalProducts = x.cantidad + totalProducts
        // //     console.log(totalProducts)
        // })
    }


    return (
        <CartContext.Provider value={{addItem, clearCart, removeItem, getTotalPrice, getTotalProducts, productCartList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;