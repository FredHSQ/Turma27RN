import React, { createContext, useContext, useEffect, useState } from "react";
import { magicItemListProps } from "../../services/ApiDnd/magicItemServices";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextProps {
    children: React.ReactNode
}

interface CartContextProviderProps {
    magicItemsList: magicItemListProps[],
    addItemToCart: (item: magicItemListProps) => void,
    removeItemFromCart: (index: string) => void
}

export const CartContext = createContext<CartContextProviderProps>({
    magicItemsList: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {}
});

export const CartProvider = ({ children }: ContextProps) => {
    const [magicItemsList, setMagicItemList] = useState<magicItemListProps[]>([]);

    useEffect(()=> {
        mountMagicItemList()
    }, []);

    async function mountMagicItemList () {
        try {
            let magicItemList = await getData();

            setMagicItemList(magicItemList);
        } catch {
            setMagicItemList([]);
        }
    }

    function addItemToCart(item: magicItemListProps) {
        setMagicItemList(oldList => {
           let newList = [...oldList, item];

           storeData(newList);

           return newList;
        });
    }

    function removeItemFromCart(index: string) {
        setMagicItemList(oldList => {
           let newList = oldList.filter(item => item.index !== index);

           storeData(newList);

           return newList;
        });
    }

    const storeData = async (value: magicItemListProps[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('item-list', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    async function getData(): Promise<magicItemListProps[]> {
        try {
            const jsonValue = await AsyncStorage.getItem('item-list');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            return []
        }
    };

    return <CartContext.Provider
        value={{ magicItemsList, addItemToCart, removeItemFromCart }}
    >
        { children }
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);