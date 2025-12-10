import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Page2({ route, navigation }) {
  const userNumber = String(route.params.userNumber);
  const secret = "9898";

  const compareNumbers = () => {
    const user = userNumber.split('');
    const secretArr = secret.split('');
    const result = ['-', '-', '-', '-'];
    const secretUsed = [false, false, false, false];
    const userChecked = [false, false, false, false];
    
    for (let i = 0; i < 4; i++) {
      if (user[i] === secretArr[i]) {
        result[i] = '+';
        secretUsed[i] = true;
        userChecked[i] = true;
      }
    }
    
    for (let i = 0; i < 4; i++) {
      if (!userChecked[i]) {
        for (let j = 0; j < 4; j++) {
          if (!secretUsed[j] && user[i] === secretArr[j]) {
            result[i] = '-';
            secretUsed[j] = true;
            break;
          }
        }
      }
    }
    
    return result.join('');
  };

  const result = compareNumbers();
  const success = result === "++++";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre entrée : {userNumber}</Text>
      
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Résultat :</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {success && <Text style={styles.success}>🎉 Félicitations !</Text>}

      <Button 
        title="Réessayer" 
        onPress={() => navigation.goBack()} 
        color="#4CAF50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333'
  },
  secret: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#666'
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 30,
    alignItems: 'center',
    minWidth: 200
  },
  resultLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666'
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#2196F3',
    letterSpacing: 15,
    minHeight: 80
  },
  success: {
    fontSize: 26,
    color: "green",
    marginBottom: 30,
    fontWeight: "bold"
  }
});