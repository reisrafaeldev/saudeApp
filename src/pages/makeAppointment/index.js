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
} from "../../components/micros";
export const MakeAppointment = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
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
    "Reumatologia",
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
      <HeaderMenu variant={"secondary"} title="Marcação de Consulta" />
      <S.Overflow>
        <S.Center>
          <Select
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            label={"Escolha A Clínica"}
            buttonLabel={"Escolha A Clínica"}
          />
          <Select
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            label={"Escolha o Profissional"}
            buttonLabel={"Escolha o Profissional"}
          />

          <Calendar
          
            style={{
              height: 350,
              width: 350,
              marginTop: 20,

            }}
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
          <ButtonComponent
            label={"Marcar"}
            backgroundColor={"3"}
            marginT={"20px 0 0 0"}
            onPress={handleSubmit}
          />
        </S.Center>
      </S.Overflow>
    </Template>
  );
};
