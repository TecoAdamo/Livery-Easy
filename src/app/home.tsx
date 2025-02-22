import { View, Text, StyleSheet, Alert } from "react-native";
import { fontFamily, colors } from "@/styles/theme";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import Categories, {
  CategoriesProps,
} from "@/components/categories/categories";
import { PlaceProps } from "@/components/place/place";
import Places from "@/components/places/places";

type Props = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
};

type MarketsProps = PlaceProps & {};

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
});
