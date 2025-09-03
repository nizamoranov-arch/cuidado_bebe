import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "../app/index";      // pantalla principal
import ChatScreen from "../components/Chat"; // pantalla del bot
import { useNavigation } from "@react-navigation/native";

export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página principal</Text>
      <Button title="Ir al ChatBot" onPress={() => useNavigation.navigate("Chat")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
