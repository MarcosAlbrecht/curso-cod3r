import useProdutos from "@/src/data/hooks/useProdutos";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ProdutoItem from "../../components/produto/ProdutoItem";

export default function Inicio({ navigation }: any) {
  useEffect(() => {
    console.log(`teste`);
  }, []);

  const { produtos } = useProdutos();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
      >
        {produtos.map((produto) => (
          <ProdutoItem
            key={produto.id}
            produto={produto}
            produtoSelecionado={() => {
              navigation.navigate("ProdutoDetalhes", { produto });
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
    width: "100%",
  },
});
