import { useState, useEffect } from "react";
import * as S from "./styles";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importar AsyncStorage

import {
  Template,
  HeaderMenu,
  FilterResult,
  InputComponent,
} from "../../components/micros";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

export const MeusDados = () => {
  const [facing, setFacing] = useState("back");
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [data, setData] = useState({ titulo: "", descricao: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");
    };
    requestPermission();

    const loadPhotos = async () => {
      const storedPhotos = await AsyncStorage.getItem("photos");
      if (storedPhotos) {
        console.log(JSON.parse(storedPhotos));
        setPhotos(JSON.parse(storedPhotos));
      }
    };

    loadPhotos(); 
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

  const savePhotosToStorage = async (newPhotos) => {
    try {
      await AsyncStorage.setItem("photos", JSON.stringify(newPhotos));
      console.log("salvou");
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    if (cameraRef && data.descricao && data.titulo) {
      try {
        const photo = await cameraRef.takePictureAsync();
        const fileName = `${FileSystem.documentDirectory}${Date.now()}.jpg`;
        console.log(fileName);
        await FileSystem.moveAsync({
          from: photo.uri,
          to: fileName,
        });

        const newPhoto = {
          file: fileName,
          titulo: data.titulo,
          descricao: data.descricao,
        };

        const newPhotos = [...photos, newPhoto];
        setPhotos(newPhotos);
        savePhotosToStorage(newPhotos);

        setData({ titulo: "", descricao: "" });
      } catch (error) {
        console.error("Erro ao tirar a foto:", error);
      }
    }
  };

  const deletePhoto = async (fileToDelete) => {
    try {
      const updatedPhotos = photos.filter((photo) => photo.file !== fileToDelete);
      setPhotos(updatedPhotos);
      savePhotosToStorage(updatedPhotos); 

     
      await FileSystem.deleteAsync(fileToDelete, { idempotent: true });
      console.log("Foto excluída:", fileToDelete);
    } catch (error) {
      console.error("Erro ao excluir a foto:", error);
    }
  };

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalVisible(true);
  };

  const closePhotoModal = () => {
    setIsModalVisible(false);
    setSelectedPhoto(null);
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Meus Documentos" />
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
          <S.Button onPress={takePicture}>
            <Text style={styles.text}>Salvar Documento</Text>
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
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "100%", height: "10%" }}
        renderItem={({ item }) => (
          <FilterResult
            isModalVisible={isModalVisible}
            closePhotoModal={closePhotoModal}
            selectedPhoto={selectedPhoto}
            file={item.file}
            onPressEdit={() => {}}
            titulo={item.titulo}
            descricao={item.descricao}
            diaSemana={"Terça"}
            hora={"10:00"}
            variant={"primary"}
            onPress={() => openPhotoModal(item.file)}
            onPressDelete={() => deletePhoto(item.file)} 
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
  thumbnail: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  fullSizeImage: {
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
