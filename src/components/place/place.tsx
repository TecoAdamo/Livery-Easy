import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from "react-native";
import { fontFamily, colors } from "@/styles/theme";

import { Ionicons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};
export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};
export default function Place({ data, ...rest }: Props) {
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

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} />
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.footer}>
          <Ionicons size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    height: 120,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },
  tickets: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.green.light,
  },
});
