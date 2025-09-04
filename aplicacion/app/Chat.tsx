import { View, Text } from "react-native";
import { Image, Platform, TextInput, Button, FlatList, StyleSheet } from 'react-native';

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<{ id: string; sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage = { id: Date.now().toString(), sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    
    setInput("");
    const handleSend = async () => {
  if (!input.trim()) return;

  const newMessage = { id: Date.now().toString(), sender: "user", text: input };
  setMessages((prev) => [...prev, newMessage]);
  setInput("");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer TU_API_KEY_OPENAI`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }),
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;

    setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: "bot", text: botReply },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Enviar" onPress={handleSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  messageList: { flex: 1, marginBottom: 10 },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#E5E5EA",
    alignSelf: "flex-start",
  },
  messageText: { fontSize: 16 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
});

