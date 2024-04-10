import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;
export const ContainerRows = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 5px;
  width: 100%;
  background-color: ${(props) => (props.background ? "#fff" : "#D1D5DA")};
`;

export const Container2 = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;
export const Center = styled.View`
  flex: 1;
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;
