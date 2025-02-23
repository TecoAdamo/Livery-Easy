import { View, Text, StyleSheet, Alert } from "react-native";
import { fontFamily, colors } from "@/styles/theme";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import Categories, {
  CategoriesProps,
} from "@/components/categories/categories";
import { PlaceProps } from "@/components/place/place";
import Places from "@/components/places/places";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { router } from "expo-router";

type Props = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
};

type MarketsProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  // Aqui vou chamar a API das CATEGORIAS.
  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi achado nenhuma categoria!");
    }
  }
  // Aqui vou chamar a API dos LOCAIS.
  async function fetchMarkets() {
    try {
      if (!category) {
        return;
      }
      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi achado nenhum local!");
    }
  }
  // Aqui vou é uma function pra exibir a msg de Permissão de Localização.
  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const location = await Location.getCurrentPositionAsync();
        console.log(location);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect pra assim que a tela aparecer, renderixar os dados da APi
  useEffect(() => {
    fetchCategories();
  }, []);

  // useEffect pra assim que a tela aparecer, renderixar os dados da APi LOCAIS
  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />
        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View style={styles.containerMarker}>
                <Text style={styles.containerName}>{item.name}</Text>
                <Text style={styles.containerAddress}>{item.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[300],
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 14,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  containerMarker: {},
  containerName: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
  },
  containerAddress: {
    fontSize: 12,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
  },
});
