import React from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native'; 
 
export default function Accueil({ navigation }) { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Accueil</Text> 
 
      <Text style={styles.text}> 
        Cliquez pour envoyer un message au Profil. 
      </Text> 
 
      <Button 
        title="Envoyer un paramètre" 
        onPress={() => 
          navigation.navigate('Profil', { 
            message: 'Bonjour depuis Accueil !' 
          }) 
        } 
      /> 

    </View> 
  ); 
} 

export function Logout({ onLogout }) { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Déconnexion</Text> 
      <Text style={styles.text}>Voulez-vous vraiment quitter ?</Text>
      <Button title="Se déconnecter" color="red" onPress={onLogout} />
    </View>
  ); 
}
 
const styles = StyleSheet.create({ 
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, 
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 }, 
  text: { marginBottom: 20 } 
}); 