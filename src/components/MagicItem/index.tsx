import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useCartContext } from "../../context/CartContext";
import { magicItemListProps } from "../../services/ApiDnd/magicItemServices";

interface MagicItemProps {
    item: magicItemListProps,
    isAdding?: boolean
}

export const MagicItem = ({ item, isAdding }: MagicItemProps) => {
    const { addItemToCart, removeItemFromCart } = useCartContext();

    return <TouchableOpacity onPress={() => isAdding ? addItemToCart(item) : removeItemFromCart(item.index)} style={styles.buttonMagicItem}>
        <Text style={styles.textMagicItem}>
            { item.name }
        </Text>
    </TouchableOpacity>
}