import React, { useContext, useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderMenu } from "../../components/micros/headerMenu";
import { MenuOption, Template } from "../../components/micros";
import { AuthContex } from "../../context/auth";

export const Menu = () => {
  const navigation = useNavigation();
  const { name } = useContext(AuthContex);

  const data = [
    { image: "calendario", title: "Guia Consulta Médica", redirect: "Data" },
    {
      image: "card",
      title: "Marcação de consultas",
      redirect: "MakeAppointment",
    },
    { image: "carteirinha", title: "Carteirinha", redirect: "Data" },
    { image: "check", title: "Autorização Procedimentos", redirect: "Data" },
    { image: "fone", title: "Suporte", redirect: "Data" },
    { image: "map", title: "Rede Credenciada", redirect: "Maps" },
    { image: "usuario", title: "Dados", redirect: "Data" },
    { image: "card", title: "Meus Documentos", redirect: "MeusDados" },
       {
      image: "calendario",
      title: "Meus Agendamentos",
      redirect: "MyAppointment",
    },
    {
      image: "calendario",
      title: "Tipos de Serviço",
      redirect: "ServicesType",
    },
    {
      image: "card",
      title: "Meu Historico",
      redirect: "MeuHistorico",
    },
  ];

  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <Template>
      <HeaderMenu name={name && name} />
      <S.Center>
        {data &&
          data.map((item, index) => (
            <View key={index}>
              <MenuOption
                title={item.title}
                image={item.image}
                key={index}
                onPress={() => navigation.navigate(item.redirect)}
              />
            </View>
          ))}
      </S.Center>
    </Template>
  );
};
