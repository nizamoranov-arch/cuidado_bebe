import React from "react";
import { Text, View, Button } from "react-native";

export default function Index({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página principal</Text>
      <Button
        title="Ir al ChatBot"
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
}
