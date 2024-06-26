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
import { appointments } from "../../utils/agendamentos";

export const MyAppointment = () => {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const countries = ["2023", "2022", "2021", "2020", "2019"];
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

  const handleFilter = () => {
    console.log("Filtro aplicado com Ano:", selectedYear, "e Mês:", selectedMonth);
    navigation.navigate("Login"); // Navegar após aplicar o filtro pode não ser o desejado, ajuste conforme necessário
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Meus Agendamentos" />
      <S.Center>
        <Select
          width="30%"
          data={countries}
          onSelect={(selectedItem, index) => {
            setSelectedYear(selectedItem);
          }}
          label={"Ano"}
          buttonLabel={"Ano"}
        />
        <Select
          width="30%"
          data={mesesDoAno}
          onSelect={(selectedItem, index) => {
            setSelectedMonth(selectedItem);
          }}
          label={"Mês"}
          buttonLabel={"Mês"}
        />
        <ButtonComponent
          width="30%"
          label={"Filtrar"}
          backgroundColor={"#3"}
          onPress={handleFilter}
        />
      </S.Center>
      <S.Overflow>
        {appointments.map((appointment, index) => (
          <FilterResult
            key={index}
            paciente={appointment.paciente}
            profissional={appointment.profissional}
            prontuario={appointment.prontuario}
            data={appointment.data}
            diaSemana={appointment.diaSemana}
            hora={appointment.hora}
          />
        ))}
      </S.Overflow>
    </Template>
  );
};
