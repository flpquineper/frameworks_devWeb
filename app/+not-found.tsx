import { Text, View } from "react-native";
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
      <Text>Página não encontrada 404</Text>
      <Link href={"/"}>Voltar para a página inicial</Link>
      <Link href={"/settings"}>Configurações do Admin</Link>
      <Link href={"/(auth)/login"}>Ir para a página de Login</Link>
      <Link href={"/(auth)/cadastro"}>Ir para a página de cadastro</Link>
    </View>
  );
}
