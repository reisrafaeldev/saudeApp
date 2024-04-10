import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/micros";
import { InputComponent, ButtonComponent, LinkComponent} from "../../components/micros";

export const Login = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Menu");
  };
  return (
    <S.Container>
      <S.ImageHeader source={require("../../assets/header.png")} />
      <Logo position={true} top={"150px"} />
      <S.Form>
        <InputComponent label={"E-mail"} type={"text"} />
        <InputComponent label={"E-mail"} type={"text"} />
        <InputComponent label={"E-mail"} type={"text"} />
        <InputComponent label={"Senha"} />
      <ButtonComponent
        label={"Entrar"}
        backgroundColor={"3"}
        marginT={"10px 0 0 0"}
        onPress={handleSubmit}
        />
        </S.Form>
        <LinkComponent link={"Esqueceu sua senha?"}  onPress={handleSubmit}/>

      <S.ImageFooter source={require("../../assets/footer.png")} />
    </S.Container>
  );
};
