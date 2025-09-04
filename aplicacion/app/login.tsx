
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity, Platform } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as AppleAuthentication from "expo-apple-authentication";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Google Login
  //const [request, response, promptAsync] = Google.useAuthRequest({
  //  clientId: "<TU_EXPO_CLIENT_ID>", // debes generarlo en Google Cloud Console
  //  iosClientId: "<TU_IOS_CLIENT_ID>",
  //  androidClientId: "<TU_ANDROID_CLIENT_ID>",
  //});

  /*React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Token Google:", authentication?.accessToken);
    }
  }, [response]);
    */
  const handleLogin = () => {
    console.log("email:", email);
    console.log("password:", password);
    // Aquí iría la llamada a tu backend para validar credenciales
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      {/* Usuario */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botón de login */}
      <Button title="Iniciar sesión" onPress={handleLogin} />

      <Text style={styles.or}>o</Text>
    <Text >Continuar con Google</Text>
    <Text >Continuar con Apple</Text>
      {/* Login con Google 
      <TouchableOpacity
        style={styles.googleButton}
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <Text style={styles.googleText}>Continuar con Google</Text>
      </TouchableOpacity>Login con Apple (solo iOS) 
      {Platform.OS === "ios" && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{ width: 250, height: 44, marginTop: 10 }}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });
              console.log("Apple credential:", credential);
            } catch (e) {
              console.log("Error Apple login", e);
            }
          }}
        />
      )}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  or: {
    marginVertical: 10,
    fontSize: 16,
    color: "#666",
  },
  googleButton: {
    backgroundColor: "#4285F4",
    padding: 12,
    borderRadius: 8,
    width: 250,
    alignItems: "center",
  },
  googleText: {
    color: "white",
    fontWeight: "bold",
  },
});