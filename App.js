import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text, StyleSheet } from 'react-native';

import Login from './screens/Logine';
import Accueil from './screens/Accueil';
import Profil from './screens/Profil';
import Parametres from './screens/Parametres';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/* ----------------------------------------------
   Onglets : Accueil + Profil
------------------------------------------------- */
function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <Button title="☰" onPress={() => navigation.openDrawer()} />
        ),
      }}
    >
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}

/* ----------------------------------------------
   Écran Logout
------------------------------------------------- */
function Logout({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Déconnexion</Text>
      <Text style={styles.subtitle}>
        Voulez-vous vraiment vous déconnecter ?
      </Text>
      <Button title="Se déconnecter" onPress={onLogout} />
    </View>
  );
}

/* ----------------------------------------------
   Menu latéral (Drawer)
------------------------------------------------- */
function MenuPrincipal({ onLogout }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Onglets" component={Tabs} />
      <Drawer.Screen name="Paramètres" component={Parametres} />
      <Drawer.Screen name="Déconnexion">
        {() => <Logout onLogout={onLogout} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

/* ----------------------------------------------
   Navigation principale
------------------------------------------------- */
export default function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLogged ? (
          <Stack.Screen name="Login">
            {(props) => (
              <Login {...props} onLogin={() => setIsLogged(true)} />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Application">
            {() => (
              <MenuPrincipal onLogout={() => setIsLogged(false)} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ----------------------------------------------
   Styles
------------------------------------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
  },
});
