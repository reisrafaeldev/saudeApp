import * as S from "./styles";

export const ButtonComponent = ({ onPress, label,backgroundColor, marginT, width }) => {
  return (
    <S.Container backgroundColor={backgroundColor} marginT={marginT} width={width}>     
      <S.Button onPress={onPress}>
        <S.Text link={true}>{label}</S.Text>
      </S.Button>
    </S.Container>
  );
};
