import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.popup}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="email" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="senha" placeholderTextColor="#999" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.register}>Não possui cadastro? Realize agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033e8a',  // Cor de fundo para destacar o pop-up
    alignItems: 'center',
    justifyContent: 'flex-start',  // Ajuste para posicionar o conteúdo no topo
    padding: 20,
    paddingTop: 60,  // Espaço extra no topo para ajustar a posição do conteúdo
  },
  logoContainer: {
    marginBottom: -40, // Ajustar a margem para que a logo fique sobreposta ao pop-up
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  popup: {
    backgroundColor: '#fff',  // Cor de fundo branca do pop-up
    borderRadius: 20,
    padding: 20,
    width: '90%',  // Ajuste a largura do pop-up conforme necessário
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 60, // Espaço para a logo
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0055A5',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#0055A5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#0055A5',
    marginBottom: 20,
  },
  register: {
    color: '#0055A5',
  },
});

export default LoginScreen;
