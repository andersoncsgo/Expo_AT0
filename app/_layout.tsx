import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Layout() {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/anderson-lucas-lucena/'); 
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/andersoncsgo'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.discordapp.com/attachments/934175513637974086/1351584620688310272/Imagem_do_WhatsApp_de_2025-02-07_as_19.51.20_782f3ff3.jpg?ex=67dae8c4&is=67d99744&hm=bb54dafabaf146b94dd6e87380e9d36292d097d8944156e8f64936bd305dbc38&' }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Anderson Lucas</Text>
      <Text style={styles.profession}>Analista de dados</Text>
      <Text style={styles.email}>anderson.lucas.ribeiro101@gmail.com</Text>
      <Text style={styles.phone}>‪+55 81991123596‬</Text>

      <View style={styles.socialIcons}>
        <Ionicons
          name="logo-linkedin"
          size={32}
          color="#0077B5" 
          onPress={openLinkedIn}
        />
        <Ionicons
          name="logo-github"
          size={32}
          color="#333"
          onPress={openGitHub}
          style={{ marginLeft: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 75, 
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 5,
  },
  profession: {
    fontSize: 16,
    color: '#666', 
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: '#444',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
});