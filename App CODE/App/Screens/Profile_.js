//added first name,last name,adress,tshirt size fields with icons -mousa
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setID] = useState('');
  const [address, setAddress] = useState('');
  const [shirtSize, setShirtSize] = useState('S');

  const handleSave = () => {
    // Save the changes to the user's profile
    console.log('Saving changes:', firstName, lastName, id, address, shirtSize);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Icon name="user-circle" size={100} color="#000" style={styles.profileIcon} />
      </View>

      <Text style={styles.title}>פרופיל</Text>

      <View style={styles.fieldContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>שם פרטי:</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="הכנס שם פרטי"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <View style={styles.fieldContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>שם משפחה:</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="הכנס שם משפחה"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <View style={styles.fieldContainer}>
        <Icon name="id-card" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>תעודת זהות:</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="הכנס תעודת זהות"
        value={id}
        onChangeText={(text) => setID(text)}
      />

      <View style={styles.fieldContainer}>
        <Icon name="map-marker" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>כתובת:</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="הכנס כתובת"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      <Text style={styles.label}>מידת חולצה:</Text>
      <Picker
        style={styles.picker}
        selectedValue={shirtSize}
        onValueChange={(itemValue) => setShirtSize(itemValue)}
      >
        <Picker.Item label="S" value="S" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="L" value="L" />
        <Picker.Item label="XL" value="XL" />
      </Picker>

      <Button title="שמירת שינויים" onPress={handleSave} />
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
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlign: 'right',
  },
  picker: {
    width: 300,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
