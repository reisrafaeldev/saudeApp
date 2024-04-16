import React, { useState, useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import * as S from "./styles";
import {
  Template,
  HeaderMenu,
} from "../../components/micros";
import { clinicList } from "./list";

export const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Mapa" />
      <S.Container>
      {location ? (
        <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
        onRegionChangeComplete={(region) => setMapRegion(region)}
        >
          {clinicList.map((clinic, index) => (
            <Marker
            key={index}
            coordinate={{
              latitude: clinic.latitude,
              longitude: clinic.longitude,
            }}
            title={clinic.nome}
            />
          ))}

          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Você está aqui"}
            />
        </MapView>
      ) : (
        <ActivityIndicator size="large" />
      )}
      </S.Container>
    </Template>
  );
};

