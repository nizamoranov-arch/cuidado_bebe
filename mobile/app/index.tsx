import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
