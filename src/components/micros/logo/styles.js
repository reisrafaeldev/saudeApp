import styled from "styled-components/native";

export const ImageLogo = styled.Image`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;
export const Container = styled.View`
  position: ${(props) => (props.position ? "absolute" : "relative")};
  top: ${(props) => props.top || "20px"};
`;
