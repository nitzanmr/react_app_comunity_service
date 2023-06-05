import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [age, setAge] = useState('2');




  // the frist and second, id, location

  



  const handleSave = () => {
    // Save the changes to the user's profile
    console.log('Saving changes:', name, email, age);
  };

  return (
    <View style={styles.container}>
      <Icon name="user-circle" size={50} color="#000" />

      <Text style={styles.title}>Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>shirt size:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width :300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;
