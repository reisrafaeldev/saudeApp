import * as S from "./styles";

export const TextComponent = ({ color,width, variant, marginT, children, textAlign }) => {
  return <S.Text textAlign={textAlign} width={width} variant={variant} marginT={marginT}  color={color}>{children}</S.Text>;
};
