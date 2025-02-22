import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import { Category } from "../category/category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect?: (id: string) => void;
};

export default function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          onPress={() => onSelect?.(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    position: "absolute",
    zIndex: 1,
    top: 80,
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
});
