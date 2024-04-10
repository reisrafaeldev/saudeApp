import { useState } from "react";
import { MenuMobile } from "../menuMobile";
import { TextComponent } from "../text";
import * as S from "./styles";
import { ButtonComponent } from "../button";
import { useNavigation } from "@react-navigation/native";

export const HeaderMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigation = useNavigation();

  const menuButtons = [
    {
      label: "Página Inicial",
      backgroundColor: 6,
      onPress: () => {
        navigation.navigate("Login");
        setMenuIsOpen(false);
      },
    },
    { label: "Agendamentos", backgroundColor: 6, onPress: () => {} },
    { label: "Carteirinha FUSEx", backgroundColor: 6, onPress: () => {} },
    { label: "Dados", backgroundColor: 6, onPress: () => {} },
    { label: "Tipo de Serviço", backgroundColor: 6, onPress: () => {} },
    { label: "Busca Por Especialidade", backgroundColor: 6, onPress: () => {} },
    { label: "Marcação de Consultas", backgroundColor: 6, onPress: () => {} },
    { label: "Sair", backgroundColor: 7, marginT: "10px", onPress: () => {} },
  ];
  return (
    <S.Container isOpen={menuIsOpen}>
      <S.TopContainer>
        <TextComponent color={"#fff"} variant={"Title9"}>
          Bem Vindo
        </TextComponent>
        <S.Center>
          <S.Image />
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
};
