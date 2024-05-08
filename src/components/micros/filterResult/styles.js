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
export const Top = styled.View`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-color: #000;
  height: 50px;
`;
export const Container = styled.TouchableOpacity`
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 8px;
  gap: 4px;
  background-color: #D1D5DA;
  flex-direction: column;
  margin:  20px;
`;

