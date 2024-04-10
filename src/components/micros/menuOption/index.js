import { TextComponent } from "../text";
import * as S from "./styles";

export const MenuOption = ({ title, image, onPress }) => {
  const handleImage = (image) => {
    switch (image) {
      case "calendario":
        return <S.Image source={require(`../../../assets/calendario.png`)} />;
      case "card":
        return <S.Image source={require(`../../../assets/card.png`)} />;
      case "carteirinha":
        return <S.Image source={require(`../../../assets/carterinha.png`)} />;
      case "check":
        return <S.Image source={require(`../../../assets/check.png`)} />;
      case "fone":
        return <S.Image source={require(`../../../assets/fone.png`)} />;
      case "map":
        return <S.Image source={require(`../../../assets/map.png`)} />;
      case "usuario":
        return <S.Image source={require(`../../../assets/usuario.png`)} />;

      default:
        return <S.Image source={require(`../../../assets/calendario.png`)} />;
    }
  };
  return (
    <S.Container onPress={onPress}>
      {handleImage(image)}
      <TextComponent color={"#000"} variant={"Title10"}>
        {title}
      </TextComponent>
    </S.Container>
  );
};
