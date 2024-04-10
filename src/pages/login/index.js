import React, { useContext, useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/micros";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContex } from "../../context/auth";
import {
  InputComponent,
  ButtonComponent,
  LinkComponent,
} from "../../components/micros";
import AwesomeAlert from "react-native-awesome-alerts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({ prontuario: "", senha: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const { user, access_token, handleLogin } = useContext(AuthContex);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const loadSavedLoginData = async () => {
      try {
        const savedLoginData = await AsyncStorage.getItem("loginData");
        if (savedLoginData) {
          const parsedData = JSON.parse(savedLoginData);
          setData(parsedData);
        }
      } catch (error) {}
    };

    loadSavedLoginData();
  }, []);
  useEffect(() => {
    setSpinner(true);

    let intervalId;

    if (access_token) {
      intervalId = setInterval(() => {
        navigation.navigate("Menu");
        setSpinner(false);
        clearInterval(intervalId);
      }, 2000);
    } else {
      setSpinner(false);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const handleSubmit = () => {
    if (data.prontuario && data.senha) {
      handleLogin(setSpinner, setData, setShowAlert, data, setMessage);

      AsyncStorage.setItem("loginData", JSON.stringify(data))
        .then(() => {})
        .catch((error) => {});
    } else {
      setMessage("Preencha todos os campos!");
      setShowAlert(true);
    }
  };
  console.log(data);
  return (
    <S.Container>
      <Spinner
        visible={spinner}
        textContent={"Carregando..."}
        textStyle={{
          color: "#FFF",
        }}
      />
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Erro!"
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonTextStyle={{ width: "100%" }}
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => setShowAlert(false)}
      />
      <S.ImageHeader source={require("../../assets/header.png")} />
      <Logo position={true} top={"150px"} />
      <S.Form>
        <InputComponent
          label={"Prontuário"}
          type={"text"}
          onChangeText={(e) => setData({ ...data, prontuario: e })}
          value={data.prontuario}
        />
        <InputComponent
          label={"Senha"}
          onChangeText={(e) => setData({ ...data, senha: e })}
          value={data.senha}
        />
        <ButtonComponent
          label={"Entrar"}
          backgroundColor={"4"}
          marginT={"30px 0 15px 0"}
          // onPress={handleSubmit}
          onPress={() => navigation.navigate("Menu")}
        />
        <LinkComponent
          link={"Esqueci/Cadastrar minha Senha"}
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </S.Form>

      <S.ImageFooter source={require("../../assets/footer.png")} />
    </S.Container>
  );
};
