import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export interface SkillProps {
  name: string,
  id: string
}

export const Shop = () => {

  return <View style={styles.container}>
    <Text style={styles.title}>
      Loja
    </Text>
  </View>
};