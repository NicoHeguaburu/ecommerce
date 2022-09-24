import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState ([])

    const isInCart = (idProducto) => {
        const duplicatedProduct =   productCartList.some((item) => item.id === idProducto);
        return duplicatedProduct;
    }

    const addItem = (items, cantidad) => {
        const newProduct = {
            ...items,
            cantidad,
        }

        if(isInCart(items.id)) {
            const product = productCartList.findIndex(
                (producto) => producto.id === items.id
            );
            const newArray = [...productCartList];
            newArray[product].cantidad = newArray[product].cantidad + cantidad;
            newArray[product].price = newArray[product].cantidad * newArray[product].price;
            setProductCartList(newArray);
        } else {
            const newList = [...productCartList];
            newProduct.price = newProduct.cantidad * newProduct.price;
            newList.push(newProduct);
            setProductCartList(newList);

        }
    }

    const clearCart = () => {
        setProductCartList([])
    }

    const removeItem = (itemId) => {
        const productsInCart = productCartList.filter(items => items.id !== itemId) 
        setProductCartList(productsInCart);
    }

    const getPrecioTotal = () => {
        const precioTotal = productCartList.reduce(
            (acumulador, item) => acumulador + item.price,
            0
        );
        return precioTotal;
    };

    const getTotalProducts = () => {
        const totalProducts = productCartList.reduce(
            (acumulador, item) => acumulador + item.cantidad,
            0
        );
        return totalProducts;
    }

    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearCart, getPrecioTotal, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;