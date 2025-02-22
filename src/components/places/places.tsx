import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { fontFamily, colors } from "@/styles/theme";

import { api } from "@/services/api";
import { useRef, useState } from "react";

import Place, { PlaceProps } from "../place/place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

type Props = {
  data: PlaceProps[];
};

export default function Places({ data }: Props) {
  //   const [categories, setCategories] = useState<CategoriesProps>([]);
  //   const [category, setCategory] = useState("");

  //   // Aqui vou chamar a API das CATEGORIAS.
  //   async function fetchCategories() {
  //     try {
  //       const { data } = await api.get("/categories");
  //       setCategories(data);
  //       setCategory(data[0].id);
  //     } catch (error) {
  //       console.log(error);
  //       Alert.alert("Categorias", "Não foi achado nenhuma categoria!");
  //     }
  //   }
  //   // useEffect pra assim que a tela aparecer, renderixar os dados da APi
  //   useEffect(() => {
  //     fetchCategories();
  //   }, []);
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };
  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>
            Que tal buscar por novos lugares perto de você?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300],
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    marginBottom: 16,
  },
});
