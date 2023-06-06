import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from './../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, collection, doc, setDoc, query, where, getDocs} from 'firebase/firestore';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [layerCode, setLayerCode] = useState('');
  const [registerMode, setRegisterMode] = useState(false);

    const handleLogin = () => {
      console.log("logging in...");
      signInWithEmailAndPassword(FIREBASE_AUTH, email, password).then(async (userCredential) => {
        console.log("logged in, checking user type");
        const docSnap = await getDoc(doc(FIREBASE_DB, 'users', userCredential.user.uid));
        if (docSnap.exists()) {
          if (docSnap.get('userType') == 1) navigation.navigate("Main", userCredential.user);
          else if (docSnap.get('userType') == 2) navigation.navigate("MainM");
          else if (docSnap.get('userType') == 3) navigation.navigate("MainMT");
          else if (docSnap.get('userType') == 4) navigation.navigate("MainMS");
          else console.log("valid user type not found");
        } else {
          console.log("ERROR: user data not found");
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Code: ", errorCode, "\nError Message: ", errorMessage);
        // notify the user about the error and suggest action based on error code
      });
  };

  const handleRegister = () => {
    setRegisterMode(true);
  };

  const handleBackToLogin = () => {
    setRegisterMode(false);
  };

  const handleRegisterSubmit = async () => {
    console.log("registering user...");
    const q = query(collection(FIREBASE_DB, 'managers'), where('layerCode', '==', this.layerCode));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty){
      // invalid school code
      // request to re-enter school code
    }
    else{
      createUserWithEmailAndPassword(FIREBASE_AUTH, this.email, this.password).then((userCredential) => {
        setDoc(doc(collection(FIREBASE_DB, 'users'), userCredential.user.uid), {
        id: userCredential.user.uid,
        layerCode: layerCode,
        });
        console.log(userCredential.user.email + "  registered successfully!");
      }).catch((error) => {
        // error signing up user
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code: " + errorCode + ": " + errorMessage);
      });
    }
  };

  if (registerMode) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.webp')} style={styles.logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={text => setEmail(text)}
            value={email}
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
            onChangeText={text => setLayerCode(text)}
            value={layerCode}
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
          placeholder="email"
          onChangeText={text => setEmail(text)}
          value={email}
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
