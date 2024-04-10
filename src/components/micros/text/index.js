import * as S from "./styles";

export const TextComponent = ({ color, variant, marginT, children, textAlign }) => {
  return <S.Text textAlign={textAlign} variant={variant} marginT={marginT}  color={color}>{children}</S.Text>;
};
