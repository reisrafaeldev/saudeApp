import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContex = createContext({});

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [userName, setUser] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    // Load saved login data from AsyncStorage
    const loadSavedLoginData = async () => {
      try {
        const savedLoginData = await AsyncStorage.getItem("isLogedData");
        if (savedLoginData) {
          const parsedData = JSON.parse(savedLoginData);
          setData(parsedData);
        }
      } catch (error) {
      }
    };

    loadSavedLoginData();
  }, []);
  console.log(data);
  const handleLogin = async (
    setSpinner,
    setData,
    setShowAlert,
    data,
    setMessage
  ) => {
    setSpinner(true);
    setData({
      ...data,
      email: data.prontuario,
      password: data.senha,
    });

    await axios
      .post("http://clinicapp.us-east-2.elasticbeanstalk.com/auth/signin", {
        email: data.prontuario,
        password: data.senha,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setSpinner(false);
        setShowAlert(false);
        setUser(response.data.name);
        navigation.navigate("Menu");
        AsyncStorage.setItem("isLogedData", JSON.stringify(response.data))
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setSpinner(false);
        setMessage("Prontuário ou senha incorretos!");
        setShowAlert(true);
      });
  };

  return (
    <AuthContex.Provider
      value={{
        name: userName,
        access_token: data.access_token,
        data: data,
        handleLogin,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
