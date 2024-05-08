import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: aliceblue;
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
export const Button = styled.TouchableOpacity`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  padding: 10px;
`;

export const Modal = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Overflow = styled.ScrollView`
  flex: 1;
  width: 100%;

`;

