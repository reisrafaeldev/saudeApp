import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Button = styled.TouchableOpacity`
  color: #fff;
`;
export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 7px;
`;
export const Image = styled.Image`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
export const Center = styled.View`
  display: flex;
  color: #fff;
  width: 100%;
  height: 60px;
  padding: 10px;
`;
export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background-color: ${(props) => lightTheme.colors.neutras[2]};
  flex-direction: column;
  height: 110px;
  width: 110px;
`;
