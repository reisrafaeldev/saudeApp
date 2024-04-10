import styled from "styled-components/native";
import lightTheme from "../../theme/light";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${lightTheme.colors.neutras[2]};
  background-color: #fff;
`;
export const ImageHeader = styled.Image`
  width: 100%;
  height: 208px;
  object-fit: cover;
`;

export const ImageFooter = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const Form = styled.View`
  width: 100%;
  padding: 16px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
