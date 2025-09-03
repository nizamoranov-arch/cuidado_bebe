import ChatScreen from "./components/ChatScreen";
import React from "react";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}

export default function App() {
  return <ChatScreen />;
}
const API_URL = "http://127.0.0.1:8000"; // cambia por la IP de tu backend

export async function sendMessage(query) {
  const response = await fetch(`${API_URL}/chat?query=${encodeURIComponent(query)}`);
  return response.json();
}