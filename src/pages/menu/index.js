import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderMenu } from "../../components/micros/headerMenu";
import { MenuOption } from "../../components/micros";

export const Menu = () => {
  const navigation = useNavigation();
  const data = [
    { image: "calendario", title: "Guia Consulta Médica" },
    { image: "card", title: "Marcação de consultas" },
    { image: "carteirinha", title: "Carteirinha" },
    { image: "check", title: "Autorização Procedimentos" },
    { image: "fone", title: "Suporte" },
    { image: "map", title: "Rede Credenciada" },
    { image: "usuario", title: "Dados" },
  ];

  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      <HeaderMenu />
      <S.Center>
        {data &&
          data.map((item, index) => (
            <View key={index}>
              <MenuOption title={item.title} image={item.image} key={index} />
            </View>
          ))}
      </S.Center>
    </S.Container>
  );
};
