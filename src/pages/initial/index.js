import React,{useEffect} from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/micros";

export const Initial = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Login");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSubmit();
    }, 3000);
  }, []);


  return (
    <S.Container>
    <S.ImageHeader  source={require("../../assets/header.png")} />
    <Logo position={false} />
    <S.ImageFooter  source={require("../../assets/footer.png")} />
    </S.Container>
  );
};

