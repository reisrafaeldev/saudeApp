import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Container = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  position: relative;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 18px;
  right: 10px;
`;
export const Label = styled.Text`
  color: #000;
  font-size: 15px;
  width: 100%;
  margin-bottom: 7px;
`;

export const Input = styled.TextInput`
  color: #000;
  width: 100%;
  border-radius: 5px;
  height: 50px;
  padding: 10px 10px 10px 25px;
  background-color: ${lightTheme.colors.neutras[2]};

  letter-spacing: 1px;
  border: ${(props) =>
    props.showError ? "1px solid #c60d00" : "1px solid #fff"};
`;
export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;
