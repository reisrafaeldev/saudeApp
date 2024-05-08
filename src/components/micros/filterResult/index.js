import { ButtonComponent } from "../button";
import { TextComponent } from "../text";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import  {Video}  from "expo-av";

export const FilterResult = ({
  hora,
  data,
  file,
  variant,
  onPress,
  video,
  titulo,
  paciente,
  diaSemana,
  prontuario,
  descricao,
  onPressDelete,
  proficional,
  selectedPhoto,
  selectedVideo,
  isModalVisible,
  closePhotoModal,
}) => {
  const navigation = useNavigation();


  return variant == "primary" ? (
    <S.Container>
      <S.Top>
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Título: {titulo}
        </TextComponent>
      </S.Top>
      <TextComponent color={"#14532d"} variant={"Title10"} textAlign={"center"}>
        Descrição: {descricao}
      </TextComponent>

      <ButtonComponent
        width="100%"
        marginT="15px 0 0"
        label={"Excluir"}
        background={"#9d1b26"}
        onPress={onPressDelete}
      />
      <ButtonComponent
        width="100%"
        marginT="10px 0 0"
        label={"Visualizar"}
        backgroundColor={"6"}
        onPress={onPress}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closePhotoModal}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closePhotoModal}
          >
            <Text style={styles.text}>Fechar</Text>
          </TouchableOpacity>
          {selectedVideo && (
            <Video
              source={{ uri: selectedVideo }}
              style={styles.fullSizeVideo}
              useNativeControls={true}
              resizeMode="contain"
              isLooping={true}
            />
          )}
        </View>
      </Modal>
    </S.Container>
  ) : variant == "secondary" ? (
    <S.Container>
      <S.Top>
        <TextComponent
          color={"#14532d"}
          variant={"Title10"}
          textAlign={"center"}
        >
          Título: {titulo}
        </TextComponent>
        {file && <Image source={{ uri: file }} style={styles.Image} />}
      </S.Top>
      <TextComponent color={"#14532d"} variant={"Title10"} textAlign={"center"}>
        Descrição: {descricao}
      </TextComponent>

      <ButtonComponent
        width="100%"
        marginT="15px 0 0"
        label={"Excluir"}
        background={"#9d1b26"}
        onPress={onPressDelete}
      />
      <ButtonComponent
        width="100%"
        marginT="10px 0 0"
        label={"Visualizar"}
        backgroundColor={"6"}
        onPress={onPress}
      />
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closePhotoModal}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closePhotoModal}
          >
            <Text style={styles.text}>Fechar</Text>
          </TouchableOpacity>
          {selectedPhoto && !video && (
            <Image
              source={{ uri: selectedPhoto }}
              style={styles.fullSizeImage}
            />
          )}
        </View>
      </Modal>
    </S.Container>
  ): (
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

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  fullSizeVideo: {
    width: "80%",
    height: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
});