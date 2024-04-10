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
export const Image = styled.View`
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: aliceblue;
`;
export const Center = styled.View`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
  height: 60px;
  padding: 10px;
`;
export const Container = styled.View`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props) => lightTheme.colors.success[6]};
  flex-direction: column;
  height: ${(props) => (props.isOpen ? "600px" : "176px")};
  width: 100%;
  padding-bottom: 20px;
  transition: height 0.5s ease-in-out;
`;
export const TopContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 176px;
  border-bottom-width: 1px;
  border-color: #000;
`;
export const BottonContainer = styled.View`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;
