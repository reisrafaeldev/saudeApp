import { useState, useEffect } from "react";
import * as S from "./styles";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Template,
  HeaderMenu,
  FilterResult,
  InputComponent,
} from "../../components/micros";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

export const MeusVideos = () => {
  const [facing, setFacing] = useState("back");
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [videos, setVideos] = useState([]);
  const [data, setData] = useState({ titulo: "", descricao: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");
    };
    requestPermission();

    const loadVideos = async () => {
      const storedVideos = await AsyncStorage.getItem("videos");
      if (storedVideos) {
        setVideos(JSON.parse(storedVideos));
      }
    };

    loadVideos();
  }, []);

  if (cameraPermission === null) {
    return <View />;
  }

  if (!cameraPermission) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Precisamos da sua permissão para usar a câmera
        </Text>
        <Button
          title="Permitir uso da câmera"
          onPress={() => {
            const requestPermission = async () => {
              const { status } = await Camera.requestCameraPermissionsAsync();
              setCameraPermission(status === "granted");
            };
            requestPermission();
          }}
        />
      </View>
    );
  }

  const saveVideosToStorage = async (newVideos) => {
    try {
      await AsyncStorage.setItem("videos", JSON.stringify(newVideos));
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const toggleRecording = async () => {
    if (!isRecording) {
      if (cameraRef && data.descricao && data.titulo) {
        setIsRecording(true);
        try {
          cameraRef.recordAsync().then(async (video) => {
            const fileName = `${FileSystem.documentDirectory}${Date.now()}.mp4`;
            await FileSystem.moveAsync({
              from: video.uri,
              to: fileName,
            });

            const newVideo = {
              file: fileName,
              titulo: data.titulo,
              descricao: data.descricao,
            };

            const newVideos = [...videos, newVideo];
            setVideos(newVideos);
            saveVideosToStorage(newVideos);

            setData({ titulo: "", descricao: "" });
            setIsRecording(false);
          });
        } catch (error) {
          console.error("Erro ao gravar o vídeo:", error);
          setIsRecording(false);
        }
      }
    } else {
      if (cameraRef) {
        await cameraRef.stopRecording();
      }
    }
  };

  const deleteVideo = async (fileToDelete) => {
    try {
      const updatedVideos = videos.filter(
        (video) => video.file !== fileToDelete
      );
      setVideos(updatedVideos);
      saveVideosToStorage(updatedVideos);

      await FileSystem.deleteAsync(fileToDelete, { idempotent: true });
    } catch (error) {
      console.error("Erro ao excluir o vídeo:", error);
    }
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalVisible(true);
  };

  const closeVideoModal = () => {
    setIsModalVisible(false);
    setSelectedVideo(null);
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Meus Videos" />
      <Camera
        style={{ flex: 2, width: "100%" }}
        type={
          facing === "back"
            ? Camera.Constants.Type.back
            : Camera.Constants.Type.front
        }
        ref={(ref) => setCameraRef(ref)}
      >
        <S.Content>
          <S.Button onPress={toggleCameraFacing}>
            <Text style={styles.text}>Alternar Câmera</Text>
          </S.Button>
          <S.Button onPress={toggleRecording}>
            <Text style={styles.text}>
              {isRecording ? "Parar Gravação" : "Iniciar Gravação"}
            </Text>
          </S.Button>
          <InputComponent
            label={"Título"}
            type={"text"}
            onChangeText={(titulo) =>
              setData((currentData) => ({ ...currentData, titulo }))
            }
            value={data.titulo}
          />
          <InputComponent
            label={"Descrição"}
            type={"text"}
            onChangeText={(descricao) =>
              setData((currentData) => ({ ...currentData, descricao }))
            }
            value={data.descricao}
          />
        </S.Content>
      </Camera>

      <FlatList
        data={videos}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "100%", height: "10%" }}
        renderItem={({ item }) => (
          <FilterResult
            isModalVisible={isModalVisible}
            closePhotoModal={closeVideoModal}
            selectedVideo={selectedVideo}
            file={item.file}
            video
            onPressEdit={() => {}}
            titulo={item.titulo}
            descricao={item.descricao}
            diaSemana={"Terça"}
            hora={"10:00"}
            variant={"primary"}
            onPress={() => openVideoModal(item.file)}
            onPressDelete={() => deleteVideo(item.file)}
          />
        )}
      />
    </Template>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
