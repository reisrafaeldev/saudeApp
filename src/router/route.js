import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthProvider from "../context/auth";
import {
  ForgotPassword,
  Login,
  Initial,
  Menu,
  Data,
  Specialty,
  MakeAppointment,
  MyAppointment,
  ServicesType,
  Maps,
} from "../pages";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../pages/mapScreen";
import { MeusDados } from "../pages/MeusDados";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Initial"
            options={{
              headerShown: false,
            }}
            component={Initial}
          />
          <Stack.Screen
            name="MeusDados"
            options={{
              headerShown: false,
            }}
            component={MeusDados}
          />
          <Stack.Screen
            name="Maps"
            options={{
              headerShown: false,
            }}
            component={Maps}
          />
          <Stack.Screen
            name="MapScreen"
            options={{
              headerShown: false,
            }}
            component={MapScreen}
          />
          <Stack.Screen
            name="ServicesType"
            options={{
              headerShown: false,
            }}
            component={ServicesType}
          />

          <Stack.Screen
            name="MyAppointment"
            options={{
              headerShown: false,
            }}
            component={MyAppointment}
          />
          <Stack.Screen
            name="MakeAppointment"
            options={{
              headerShown: false,
            }}
            component={MakeAppointment}
          />
          <Stack.Screen
            name="Specialty"
            options={{
              headerShown: false,
            }}
            component={Specialty}
          />
          <Stack.Screen
            name="Menu"
            options={{
              headerShown: false,
            }}
            component={Menu}
          />
          <Stack.Screen
            name="Data"
            options={{
              headerShown: false,
            }}
            component={Data}
          />

          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerTitleStyle: { color: "#fff" },
              title: "Voltar",
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#000"
                  onPress={() => navigation.goBack()}
                  style={{ marginLeft: 10, color: "#fff" }}
                />
              ),
            })}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Route;
