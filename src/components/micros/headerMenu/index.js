import { useState } from "react";
import { MenuMobile } from "../menuMobile";
import { TextComponent } from "../text";
import * as S from "./styles";
import { ButtonComponent } from "../button";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderMenu = ({ variant, title, name }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigation = useNavigation();

  const menuButtons = [
    {
      label: "Página Inicial",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("Menu");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Agendamentos",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("MyAppointment");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Carteirinha FUSEx",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("Login");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Dados",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("Data");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Tipo de Serviço",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("Login");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Busca Por Especialidade",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("Specialty");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Marcação de Consultas",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("MakeAppointment");
        setMenuIsOpen(false);
      },
    },
    {
      label: "Sair",
      backgroundColor: 7,
      marginT: "10px",
      onPress: () => {
        navigation.navigate("Login");
        setMenuIsOpen(false);
      },
    },
  ];
  
  
  switch (variant) {
    case "primary":
      return (
        <S.Container isOpen={menuIsOpen}>
          <S.TopContainer>
            <TextComponent color={"#fff"} variant={"Title9"}>
              Bem Vindo
            </TextComponent>
            <S.Center>
              <S.Image />
              <S.TextContainer>
                <TextComponent color={"#fff"} variant={"Title9"}>
                  Olá
                </TextComponent>
              </S.TextContainer>
              <MenuMobile setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)} />
            </S.Center>
          </S.TopContainer>

          <S.BottonContainer isOpen={menuIsOpen}>
            {menuButtons.map((button, index) => (
              <ButtonComponent
                key={index}
                label={button.label}
                backgroundColor={button.backgroundColor}
                marginT={button.marginT || "0px"}
                onPress={button.onPress}
              />
            ))}
          </S.BottonContainer>
        </S.Container>
      );
    case "secondary":
      return (
        <S.SecondayContainer isOpen={menuIsOpen}>
          <S.TopContainer height="100px">
            <S.Center height="50px">
              <Ionicons
                name="arrow-back"
                size={24}
                color="#000"
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10, color: "#fff" }}
              />
              <TextComponent color={"#fff"} variant={"Title9"}>
                {title}
              </TextComponent>
              <MenuMobile setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)} />
            </S.Center>
          </S.TopContainer>

          <S.BottonContainer isOpen={menuIsOpen}>
            {menuButtons.map((button, index) => (
              <ButtonComponent
                key={index}
                label={button.label}
                backgroundColor={button.backgroundColor}
                marginT={button.marginT || "0px"}
                onPress={button.onPress}
              />
            ))}
          </S.BottonContainer>
        </S.SecondayContainer>
      );

    default:
      return (
        <S.Container isOpen={menuIsOpen}>
          <S.TopContainer>
            <TextComponent color={"#fff"} variant={"Title9"}>
              Bem Vindo
            </TextComponent>
            <S.Center>
              <S.Image />
              <S.TextContainer>
                <TextComponent color={"#fff"} variant={"Title9"}>
                  Olá
                </TextComponent>
                <TextComponent color={"#fff"} variant={"Titl10"}>
                 {name}
                </TextComponent>
                <TextComponent color={"#fff"} variant={"Titl10"}>
                  Grupo FUSEX
                </TextComponent>
              </S.TextContainer>
              <MenuMobile setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)} />
            </S.Center>
          </S.TopContainer>

          <S.BottonContainer isOpen={menuIsOpen}>
            {menuButtons.map((button, index) => (
              <ButtonComponent
                key={index}
                label={button.label}
                backgroundColor={button.backgroundColor}
                marginT={button.marginT || "0px"}
                onPress={button.onPress}
              />
            ))}
          </S.BottonContainer>
        </S.Container>
      );
  }
};
