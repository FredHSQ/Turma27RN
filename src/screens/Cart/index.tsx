import React, { useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from './styles'
import { MagicItem } from "../../components/MagicItem";
import { magicItemListProps } from "../../services/ApiDnd/magicItemServices";
import { useCartContext } from "../../context/CartContext";

export const Cart = () => {
    const  { magicItemsList } = useCartContext();

    return <View style={styles.container}>
        <Text style={styles.title}>
            Carrinho
        </Text>

        <FlatList
            data={magicItemsList}
            renderItem={({ item })=>{
            return <MagicItem
                    item={item}
                />
            }}
        />
    </View>
}