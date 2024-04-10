import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
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
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;