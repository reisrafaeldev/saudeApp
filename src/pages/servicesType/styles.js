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
  flex: 1;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;
export const CenterIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overflow = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const Select = styled(SelectDropdown)`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(142, 157, 165, 0.2);
  border-radius: 5px;
  padding: 5px;
  min-height: 40px;
  justify-content: space-between;
  align-items: center;
`;
