import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/micros";
import { InputComponent, ButtonComponent } from "../../components/micros";

export const ForgotPassword  = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Login");
  };
  return (
    <S.Container>
    <S.ImageHeader  source={require("../../assets/header.png")} />
    <Logo position={true} top={"150px"}/>

    <S.Form>
    <InputComponent label={"E-mail"}/>
    <InputComponent label={"Senha"} type={"text"}/>
    <ButtonComponent label={"Enviar"} backgroundColor={'3'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>

    </S.Form>

    <S.ImageFooter  source={require("../../assets/footer.png")} />
    </S.Container>
  );
};

