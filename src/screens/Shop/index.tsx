import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { MagicItem } from "../../components/MagicItem";
import { getMagicItemList, magicItemListProps } from "../../services/ApiDnd/magicItemServices";

export const Shop = () => {
  const [magicItemsList, setMagicItemList] = useState<magicItemListProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=> {
    getMagicItemList().then((item)=>{
      setMagicItemList(item.data.results);
    }).catch(e =>{
      console.log(e);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return <View style={styles.container}>
    <Text style={styles.title}>
      Loja
    </Text>
    {
    loading? 
    <ActivityIndicator
      color={'red'}
      size={"large"}
    />
    :
    <FlatList
      data={magicItemsList}
      renderItem={({ item })=>{
        return <MagicItem
          name={item.name}
        />
      }}
      />
    }
  </View>
};