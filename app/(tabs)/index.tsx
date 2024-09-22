import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView,Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.instructionText}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input2} placeholder="Senha" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha ?</Text>
          <Text style={styles.ntemcadas}>Não possui cadastro? Realizar agora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop:70,
    marginBottom: 30, // Ajustar a margem para que a logo fique sobreposta ao pop-up
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#033E8A',
  },
  header: {
    backgroundColor: '#033E8A',
    width: '100%',
    padding: 25,
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
    padding: 40,
    margin: -10,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    elevation: 3,
  },
  instructionText: {
    marginTop:-5,
    textAlign: 'center',
    fontSize: 34,
    marginBottom: 25,
    color: '#0055A5',
  },
  input: {
    marginTop:40,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor:'#F2F2F2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  input2: {
    marginTop:10,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor:'#F2F2F2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#033E8A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#033E8A',
    fontSize:16,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
    marginTop:15,
  },
  forgotPassword: {
    color: '#000',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  ntemcadas:{
    marginTop:50,
    color: '#000',
    marginBottom: 20,
  }
});
