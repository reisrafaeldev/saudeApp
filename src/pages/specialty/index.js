import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderMenu } from "../../components/micros/headerMenu";
import { MenuOption, Template, TextComponent, Select } from "../../components/micros";
export const Specialty = () => {
  const navigation = useNavigation();
  const countries = [
    "Cardiologia",
    "Dermatologia",
    "Ginecologia",
    "Pediatria",
    "Neurologia",
    "Ortopedia",
    "Oftalmologia",
    "Psiquiatria",
    "Radiologia",
    "Cirurgia Geral",
    "Urologia",
    "Otorrinolaringologia",
    "Endocrinologia",
    "Nefrologia",
    "Infectologia",
    "Hematologia",
    "Anestesiologia",
    "Gastroenterologia",
    "Reumatologia"
  ];
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
      <HeaderMenu variant={"secondary"} title="Buscar Por Especialidade" />
      <S.Center>
      <Select
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          label={"Selecione uma especialidade"}
          buttonLabel={"Selecione uma especialidade"}
        />
      </S.Center>
    </Template>
  );
};
