import * as S from "./styles";

export const Logo = ({position, top}) => {
  return (
    <S.Container position={position} top={top}>
      <S.ImageLogo source={require("../../../assets/logo.png")} />
    </S.Container>
  );
};
