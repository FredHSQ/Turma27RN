import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { SkillButton } from "./components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../routes/navigators/bottomTabNavigator";

export interface SkillObjectProps {
  name: string,
  id: string
}

type SkillsScreenProps = BottomTabScreenProps<RootTabParamList,'Skills'>;

export const Skills = ({ navigation }: SkillsScreenProps) => {
  const [newSkill, setNewSkill] = useState<string>("");
  const [skills, setSkills] = useState<SkillObjectProps[]>([]);

  function addSkill() {
    const skillObject: SkillObjectProps = {
      name: newSkill,
      id: String(new Date().getTime())
    }
    setSkills(oldSkills => [...oldSkills, skillObject]);
    navigation.navigate("Shop", { id : 'fred' })
  }

  function removeSkill(id: string) {
    setSkills(oldSkills => oldSkills.filter(skill=> skill.id !== id));
  }

  return <View style={styles.container}>
    <Text style={styles.title}>
      Habilidades
    </Text>
    <TextInput
      style={styles.input}
      value={newSkill}
      onChangeText={text => setNewSkill(text)}
    />
    <Button
      onPress={addSkill}
      buttonText="Adiciona Habilidade"
    />
    <FlatList
      data={skills}
      renderItem={({ item }) => <SkillButton removeSkill={removeSkill} item={item}/>}
    />
  </View>
};