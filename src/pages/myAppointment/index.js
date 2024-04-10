import React, { useState } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderMenu } from "../../components/micros/headerMenu";
import { Calendar, LocaleConfig } from "react-native-calendars";

import {
  MenuOption,
  Template,
  TextComponent,
  Select,
  ButtonComponent,
  FilterResult,
} from "../../components/micros";
export const MyAppointment = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const countries = ["2023", "2022", "2021", "2020", "2019"];
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
  const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Meus Agendamentos" />
      <S.Center>
        <Select
          width="30%"
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          label={"Ano"}
          buttonLabel={"Ano"}
        />
        <Select
          width="30%"
          data={mesesDoAno}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          label={"Mês"}
          buttonLabel={"Mês"}
        />

        <ButtonComponent
          width="30%"
          label={"Filtrar"}
          backgroundColor={"3"}
          onPress={handleSubmit}
        />
      </S.Center>
      <S.Overflow>
        <FilterResult
          paciente={"Rafael"}
          proficional={"Zezin"}
          prontuario={"1234"}
          data={"24/08"}
          diaSemana={"Terça"}
          hora={"10:00"}
        />
        <FilterResult
          paciente={"Rafael"}
          proficional={"Zezin"}
          prontuario={"1234"}
          data={"24/08"}
          diaSemana={"Terça"}
          hora={"10:00"}
        />
        <FilterResult
          paciente={"Rafael"}
          proficional={"Zezin"}
          prontuario={"1234"}
          data={"24/08"}
          diaSemana={"Terça"}
          hora={"10:00"}
        />
        <FilterResult
          paciente={"Rafael"}
          proficional={"Zezin"}
          prontuario={"1234"}
          data={"24/08"}
          diaSemana={"Terça"}
          hora={"10:00"}
        />
      </S.Overflow>
    </Template>
  );
};
