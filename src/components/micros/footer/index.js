import { useEffect } from "react";
import { TextComponent } from "../text";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Footer = () => {
  const navigation = useNavigation();

  const handelNavigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <S.Container>
      <S.Button onPress={() => handelNavigate("Menu")}>
        <S.Image source={require(`../../../assets/map.png`)} />
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Principal
        </TextComponent>
      </S.Button>
      <S.Button onPress={() => handelNavigate("Maps")}>
        <S.Image source={require(`../../../assets/home.png`)} />
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Rede
        </TextComponent>
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Credenciada
        </TextComponent>
      </S.Button>
      <S.Button onPress={() => handelNavigate("MakeAppointment")}>
        <S.Image source={require(`../../../assets/calendario.png`)} />
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Marcar Consulta
        </TextComponent>
      </S.Button>
    </S.Container>
  );
};
