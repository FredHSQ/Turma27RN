import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    buttonText: string
}

export const Button = ({ buttonText, ...props }: ButtonProps) => {
    return <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.buttonText}>
            { buttonText }
        </Text>
    </TouchableOpacity>
};