import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderMenu } from "../../components/micros/headerMenu";
import { MenuOption, Template, TextComponent } from "../../components/micros";

export const Data = () => {
  const navigation = useNavigation();
  const data = [
    { title: "Nome:" },
    { title: "CPF:" },
    { title: "PRECCP:" },
    { title: "Validade:" },
    { title: "Prontuário:" },
    { title: "Data Nascimento:" },
    { title: "Grupo:" },
    { title: "RM:" },
    { title: "CPF Titular:" },
    { title: "Última Atualização:" },
  ];

  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Dados" />
      <S.Center>
        {data &&
          data.map((item, index) => (
            <S.ContainerRows key={index} background={ index % 2 == 0 ? true : false }>
              <TextComponent color={"#000"} variant={"Title9"} >
              {item.title}
              </TextComponent>
            </S.ContainerRows>
          ))}
      </S.Center>
    </Template>
  );
};
