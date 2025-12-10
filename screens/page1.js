import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Page1({ navigation }) {
  const [input, setInput] = useState("");

  const handleVerify = () => {
    if (input.length !== 4 || isNaN(input)) {
      Alert.alert("Erreur", "Veuillez entrer un nombre de 4 chiffres !");
      return;
    }

    navigation.navigate("Page2", { userNumber: input });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Entrez un nombre à 4 chiffres :</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={4}
        value={input}
        onChangeText={setInput}
      />

      <Button title="Vérifier" onPress={handleVerify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center"
  }
});