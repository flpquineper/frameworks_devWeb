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
      <Text>Tela de Cadastro</Text>
        <Link href={"/(auth)/login"}>Ir para a página de Login</Link>
        <Link href={"/"}>Ir para a página Inicial</Link>
        <Link href={"/settings"}>Ir para a página de Configurações</Link>
    </View>
  );
}