import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela de Login</Text>
      <Link href={"/(auth)/cadastro"}>Ir para a página de cadastro</Link>
      <Link href={"/"}>Ir para a página Inicial</Link>
      <Link href={"/settings"}>Configurações do Admin</Link>
    </View>
  );
}