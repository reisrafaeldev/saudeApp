import styled from "styled-components/native";

export const ImageLogo = styled.Image`
  width: 140px;
  height: 140px;
  object-fit: contain;
`;
export const Container = styled.View`
  position: ${(props) => (props.position ? "absolute" : "relative")};
  top: ${(props) => props.top || "20px"};
`;
