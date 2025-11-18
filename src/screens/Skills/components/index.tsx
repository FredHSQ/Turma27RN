import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import icon from '../../../../assets/CircleIcon.png';
import { SkillObjectProps } from "..";

interface SkillsButtonProps {
    item: SkillObjectProps,
    removeSkill: (id: string) => void
}

export const SkillButton = ({ item, removeSkill }: SkillsButtonProps) => {
     if(!item) {
        return null;
    }
    
    return <TouchableOpacity onPress={() => removeSkill(item.id)} activeOpacity={0.7} style={styles.buttonSkill}>
        <Image
            source={icon}
            style={styles.image}
        />
        <Text style={styles.textSkill}>
        { item.name }
        </Text>
    </TouchableOpacity>
}