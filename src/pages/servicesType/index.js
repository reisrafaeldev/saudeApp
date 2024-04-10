import React, { useState } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderMenu } from "../../components/micros/headerMenu";
import { AntDesign } from "@expo/vector-icons";
import {
  ButtonComponent,
  Template,
  TextComponent,
} from "../../components/micros";
export const ServicesType = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Tipos de Serviço" />
      <S.Center>
        <S.Button
          label={"Por Especizalidade"}
          backgroundColor={"#222b45"}
          marginT={"0"}
        >
          <TextComponent color={"#000"} variant={"Title9"}>
            Por Especialidade
          </TextComponent>
          <AntDesign name="caretright" size={24} color="#14532d" />
        </S.Button>
        <S.Button
          label={"Por Especizalidade"}
          backgroundColor={"#222b45"}
          marginT={"0"}
        >
          <TextComponent color={"#000"} variant={"Title9"}>
            Consultórios/Clínicas
          </TextComponent>
          <AntDesign name="caretright" size={24} color="#14532d" />
        </S.Button>
        <S.Button
          label={"Por Especizalidade"}
          backgroundColor={"#222b45"}
          marginT={"0"}
        >
          <TextComponent color={"#000"} variant={"Title9"}>
            Hospitais Eletivos
          </TextComponent>
          <AntDesign name="caretright" size={24} color="#14532d" />
        </S.Button>
        <S.Button
          label={"Por Especizalidade"}
          backgroundColor={"#222b45"}
          marginT={"0"}
        >
          <TextComponent color={"#000"} variant={"Title9"}>
            Pronto Socorro 24h (Urgência e Emergência)
          </TextComponent>
          <AntDesign name="caretright" size={24} color="#14532d" />
        </S.Button>
        <S.Button
          label={"Por Especizalidade"}
          backgroundColor={"#222b45"}
          marginT={"0"}
        >
          <S.CenterIcon>
            <TextComponent color={"#000"} variant={"Title9"}>
              Serviços Auxiliares de
            </TextComponent>
            <TextComponent color={"#000"} variant={"Title9"}>
              Diagnósticos e Terapia
            </TextComponent>
          </S.CenterIcon>
          <S.CenterIcon>
            <AntDesign name="caretright" size={24} color="#14532d" />
          </S.CenterIcon>
        </S.Button>
      </S.Center>
    </Template>
  );
};
