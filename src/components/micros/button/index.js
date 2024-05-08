import * as S from "./styles";

export const ButtonComponent = ({ onPress, label,backgroundColor, marginT, width,  background }) => {
  return (
    <S.Container backgroundColor={backgroundColor} marginT={marginT} width={width}  background={ background}>     
      <S.Button onPress={onPress}>
        <S.Text link={true}>{label}</S.Text>
      </S.Button>
    </S.Container>
  );
};
