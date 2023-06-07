import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState("firstName");
  const [lastName, setLastName] = useState("lastName");
  const [id, setID] = useState("id");
  const [address, setAddress] = useState("address");
  const [shirtSize, setShirtSize] = useState("S");
  const [volunteerPlace, setvolunteerPlace] = useState("juro");

  const [modalVisible, setModalVisible] = useState(false);
  const [newValue, setNewValue] = useState("");

  const [shirtSizeModalVisible, setShirtSizeModalVisible] = useState(false);

  const handleChange = () => {
    // Handle the change and update the field value
    if (modalVisible) {
      switch (modalVisible) {
        case "firstName":
          setFirstName(newValue);
          break;
        case "lastName":
          setLastName(newValue);
          break;
        case "id":
          setID(newValue);
          break;
        case "address":
          setAddress(newValue);
          break;
        default:
          break;
      }
    }
    setModalVisible(false);
  };

  const handleShirtSizeChange = () => {
    setShirtSize(newValue);
    setShirtSizeModalVisible(false);
    setNewValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Icon
          name="user-circle"
          size={100}
          color="#000"
          style={styles.profileIcon}
        />
      </View>

      <Text style={styles.title}>פרופיל</Text>

      <View style={styles.fieldContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>שם פרטי:</Text>
        <Button
          title="שנה"
          onPress={() => {
            setModalVisible("firstName");
            setNewValue(firstName);
          }}
        />
      </View>

      <Text style={styles.value}>{firstName}</Text>

      <View style={styles.fieldContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>שם משפחה:</Text>
        <Button
          title="שנה"
          onPress={() => {
            setModalVisible("lastName");
            setNewValue(lastName);
          }}
        />
      </View>
      <Text style={styles.value}>{lastName}</Text>

      <View style={styles.fieldContainer}>
        <Icon name="id-card" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>תעודת זהות:</Text>
        <Button
          title="שנה"
          onPress={() => {
            setModalVisible("id");
            setNewValue(id);
          }}
        />
      </View>
      <Text style={styles.value}>{id}</Text>

      <View style={styles.fieldContainer}>
        <Icon name="map-marker" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>כתובת:</Text>
        <Button
          title="שנה"
          onPress={() => {
            setModalVisible("address");
            setNewValue(address);
          }}
        />
      </View>
      <Text style={styles.value}>{address}</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>מידת חולצה:</Text>
        <Button
          title="שנה"
          onPress={() => {
            setShirtSizeModalVisible(true);
            setNewValue(shirtSize);
          }}
        />
      </View>
      <Text style={styles.value}>{shirtSize}</Text>
      <View style={styles.fieldContainer}>
        <Icon name="map-marker" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>מקום התנדבות: </Text>
      </View>
      <Text style={styles.value}>{volunteerPlace}</Text>
      <Button title="שמירת שינויים" onPress={handleChange} />

      <Modal visible={!!modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>שינוי ערך</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="הכנס ערך חדש"
            value={newValue}
            onChangeText={(text) => setNewValue(text)}
          />
          <Button title="שמור" onPress={handleChange} />
          <Button
            title="ביטול"
            onPress={() => {
              setModalVisible(false);
              setNewValue("");
            }}
          />
        </View>
      </Modal>

      <Modal visible={shirtSizeModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>שינוי ערך</Text>
          <Picker
            style={styles.picker}
            selectedValue={newValue}
            onValueChange={(itemValue) => setNewValue(itemValue)}
          >
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="L" value="L" />
            <Picker.Item label="XL" value="XL" />
          </Picker>
          <Button title="שמור" onPress={handleShirtSizeChange} />
          <Button
            title="ביטול"
            onPress={() => {
              setShirtSizeModalVisible(false);
              setNewValue("");
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
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
    fontWeight: "bold",
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontWeight: "bold",
    textAlign: "center",

    flex: 1,
  },
  value: {
    textAlign: "right",
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlign: "right",
  },
  picker: {
    width: 300,
    marginBottom: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalInput: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlign: "right",
  },
});

export default ProfileScreen;
