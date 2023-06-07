import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [registerMode, setRegisterMode] = useState(false);

    const handleLogin = () => {
          console.log(username);
      if (username == "v") navigation.navigate("Main");
      else if (username == "m") navigation.navigate("MainM");
      else if (username == "t") navigation.navigate("MainMT");
      else if (username == "s") navigation.navigate("MainMS");
  };

  const handleRegister = () => {
    setRegisterMode(true);
  };

  const handleBackToLogin = () => {
    setRegisterMode(false);
  };

  const handleRegisterSubmit = () => {
    // Implement your registration logic here
    auth().createuserwithemailpass(this.username, this.password)
    console.log('Registering...');
  };

  if (registerMode) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.webp')} style={styles.logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="School Code"
            onChangeText={text => setSchoolCode(text)}
            value={schoolCode}
          />
          <Button title="Register" onPress={handleRegisterSubmit} />
        </View>
        <Text style={styles.registerText}>
          Already have an account? <Text style={styles.registerLink} onPress={handleBackToLogin}>Log in here</Text>
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.webp')} style={styles.logo} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Button title="Log In" onPress={handleLogin} />
      </View>
      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink} onPress={handleRegister}>Register here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 100,

  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  registerText: {
    marginTop: 16,
    fontSize: 14,
    color: 'gray',
  },
  registerLink: {
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
