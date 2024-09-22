import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.instructionText}>Necessário algumas informações para continuar</Text>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Cidade" />
        <TextInput style={styles.input} placeholder="Estado" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Já possui cadastro? Entre agora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#033E8A',
  },
  header: {
    backgroundColor: '#033E8A',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    margin:30,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    margin: -20,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    elevation: 3,
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor:'#F2F2F2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#033E8A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
    marginTop:15,
  },
  loginText: {
    color: '#033E8A',
    fontSize: 16,
  },
});
