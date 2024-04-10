import { ButtonComponent } from "../button";
import { TextComponent } from "../text";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const FilterResult = ({
  onPress,
  proficional,
  paciente,
  prontuario,
  data,
  hora,
  diaSemana,
}) => {
  const navigation = useNavigation();

  const handelNavigate = (route) => {
    navigation.navigate(route);
  };
  return (
    <S.Container>
      <S.Top>
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Prontuário: {prontuario}
        </TextComponent>
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Paciente: {paciente}
        </TextComponent>
      </S.Top>
      <TextComponent color={"#14532d"} variant={"Title10"} textAlign={"center"}>
        Proficional: {proficional}
      </TextComponent>
      <TextComponent color={"#14532d"} variant={"Title10"} textAlign={"center"}>
        Data: {data}
      </TextComponent>
      <TextComponent color={"#14532d"} variant={"Title10"} textAlign={"center"}>
        Hora: {hora}
      </TextComponent>
      <TextComponent color={"#14532d"} variant={"Title10"} textAlign={"center"}>
        Dia da semana: {diaSemana}
      </TextComponent>
      <ButtonComponent
        width="100%"
        marginT="20px 0 0"
        label={"Desmarcar Consulta"}
        backgroundColor={"3"}
        onPress={onPress}
      />
    </S.Container>
  );
};
