import Pagamento from "@/src/app/stack/Pagamento";
import ProdutoDetalhes from "@/src/app/stack/ProdutoDetalhes";
import UltimasCompras from "@/src/app/stack/UltimasCompras";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "expo-router";
import { ProvedorCarrinho } from "./ContextoCarrinho";
import { ProvedorPagamento } from "./ContextoPagamento";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProvedorCarrinho>
      <ProvedorPagamento>
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProdutoDetalhes"
              component={ProdutoDetalhes}
              options={{
                title: "Detalhes do Produto",
                headerBackTitle: "Voltar",
                headerShown: true,
                headerStyle: { backgroundColor: "#0D001E" },
                headerTintColor: "#FFF",
              }}
            />
            <Stack.Screen
              name="Pagamento"
              component={Pagamento}
              options={{
                title: "Detalhes do Pagamento",
                headerBackTitle: "Voltar",
                headerShown: true,
                headerStyle: { backgroundColor: "#0D001E" },
                headerTintColor: "#FFF",
              }}
            />
            <Stack.Screen
              name="UltimasCompras"
              component={UltimasCompras}
              options={{
                title: "Últimas Compras",
                headerBackTitle: "Voltar",
                headerShown: true,
                headerStyle: { backgroundColor: "#0D001E" },
                headerTintColor: "#FFF",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProvedorPagamento>
    </ProvedorCarrinho>
  );
}
