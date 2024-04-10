import styled from "styled-components/native";
import SelectDropdown from "react-native-select-dropdown";

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

export const ContainerResult = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;
export const Center = styled.View`
  display: flex;
  padding: 15px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
`;
export const Overflow = styled.ScrollView`
  flex: 1;
  width: 100%;

`;
export const Select = styled(SelectDropdown)`
  width: 100%;
`;
