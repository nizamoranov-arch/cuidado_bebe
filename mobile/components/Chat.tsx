// Chat.tsx
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { supabase } from "../services/supabaseClient";

export default function Chat() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from("messages").select("*");
      if (error) console.error(error);
      else setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <><div>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Bienvenido al ChatBot</Text>
      </View>
    </div><View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Mensajes desde Supabase:</Text>
        {messages.map((msg: { id: React.Key | null | undefined; content: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
          <Text key={msg.id}>{msg.content}</Text>
        ))}
      </View></>
  );
}

