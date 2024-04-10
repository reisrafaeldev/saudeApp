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
export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;
