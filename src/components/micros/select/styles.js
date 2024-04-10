import styled from "styled-components/native";
import lightTheme from "../../../theme/light";
import SelectDropdown from "react-native-select-dropdown";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.marginT || "0"};
`;

export const Select = styled(SelectDropdown)`
`;
