import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Button = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
width: 68px;
`;
export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 7px;
`;
export const Image = styled.Image`
  width: 26px;
  height: 26px;
  object-fit: cover;
  margin-bottom: 2PX;
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
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 8px;
  gap: 7px;
  background-color: ${(props) => lightTheme.colors.neutras[2]};
  flex-direction: row;
  height: 80px;
  width: 100%;
`;

