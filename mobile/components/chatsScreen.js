import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { sendMessage } from "../services/api";

export default function ChatScreen() {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const enviar = async () => {
    const data = await sendMessage(mensaje);
    setMensajes([...mensajes, { role: "user", content: mensaje }, { role: "bot", content: data.respuesta }]);
    setMensaje("");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView style={{ flex: 1 }}>
        {mensajes.map((m, i) => (
          <Text key={i} style={{ marginVertical: 5 }}>
            {m.role === "user" ? "👩‍👧 " : "🤖 "} {m.content}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        value={mensaje}
        onChangeText={setMensaje}
        placeholder="Escribe tu pregunta..."
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Enviar" onPress={enviar} />
    </View>
  );
}
