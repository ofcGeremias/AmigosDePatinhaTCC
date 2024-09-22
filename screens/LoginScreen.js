import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>amigos de patinha</Text>
      <View style={styles.pawPrint}></View>
      <Text style={styles.welcomeText}>Bem-vindo!</Text>
      <TextInput style={styles.input} placeholder="email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="senha" placeholderTextColor="#aaa" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003DA5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  pawPrint: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#0056b3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
