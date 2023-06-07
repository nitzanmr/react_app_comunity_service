import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Inbox = ({ navigation }) => {
  const myid = "idSen";
  const [newMessageModalVisible, setNewMessageModalVisible] = useState(false);
  const [newMessage, setNewMessage] = useState({
    subject: "",
    receiver: "regional manager",
    body: "",
  });
  const [selectedMessage, setSelectedMessage] = useState(null); // Added state for the selected message

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMessages([
          {
            id: 1,
            subject: "Meeting",
            receiver: "Mahmoud",
            fromId: "Admin",
            toId: "idSen",
            body: "Just a reminder that we have a meeting tomorrow at 2 PM.",
          },
          {
            id: 2,
            subject: "Vacation Request",
            receiver: "sckool manager",
            fromId: "idSen",
            toId: "ss",
            body: "Hi, I wanted to request some time off next week for a family vacation.",
          },
          {
            id: 3,
            subject: "New Project Proposal",
            receiver: "Mahmoud",
            fromId: "ss",
            toId: "idSen",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
          {
            id: 4,
            subject: "New Project Proposal",
            receiver: "sckool manager",
            fromId: "idSen",
            toId: "ss",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
          {
            id: 5,
            subject: "New Project Proposal",
            receiver: "Mahmoud",
            fromId: "ss",
            toId: "idSen",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
        ]);
      } catch (error) {
        console.log("Error fetching message data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const SelectBox = ({ options, selectedValue, onValueChange }) => {
    const pickerStyle =
      Platform.OS === "ios" ? styles.pickerIOS : styles.picker;

    return (
      <Picker
        style={pickerStyle}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    );
  };

  const renderMessage = ({ item }) => {
    const handlePress = () => {
      setSelectedMessage(item); // Set the selected message when pressed
    };

    let actionIcon = null;
    if (item.fromId === myid) {
      actionIcon = <Icon name="paper-plane" size={30} />;
    } else if (item.toId === myid) {
      actionIcon = <Icon name="envelope" size={30} />;
    }

    return (
      <TouchableOpacity style={styles.messageContainer} onPress={handlePress}>
        <View style={styles.icon}>{actionIcon}</View>
        <View style={styles.messageContent}>
          <Text style={styles.messageSubject}>{item.subject}</Text>
          <Text style={styles.messageSender}>
            {item.fromId === myid
              ? "To: " + item.receiver
              : ""}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNewMessage = () => {
    setNewMessageModalVisible(true);
  };

  const handleNewMessageSubmit = () => {
    const { subject, receiver, body } = newMessage;

    // Create a new message object with a unique ID
    const newMessageObject = {
      id: messages.length + 1,
      subject,
      receiver,
      fromId: myid,
      toId: receiver,
      body,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessageModalVisible(false);
    setNewMessage({ subject: "", receiver: "school manager", body: "" });
  };

  const options = [
    { label: "Admin", value: "admin" },
    { label: "school manager", value: "school manager" },
    { label: "regional manager", value: "regional manager" },
  ];

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.messagesContainer}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          <Button title="New Message" onPress={handleNewMessage} />
          <View style={styles.footerContainer}>
            <View style={styles.line} />
          </View>
        </View>
      )}
      <Modal visible={newMessageModalVisible}>
        <KeyboardAwareScrollView>
          <View style={styles.modalCont}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>New Message</Text>
              <TextInput
                style={styles.input}
                placeholder="Subject"
                placeholderTextColor="#999"
                onChangeText={(text) =>
                  setNewMessage({ ...newMessage, subject: text })
                }
              />
              <View style={styles.input}>
                <SelectBox
                  options={options}
                  selectedValue={newMessage.receiver}
                  onValueChange={(value) =>
                    setNewMessage({ ...newMessage, receiver: value })
                  }
                />
              </View>
              <TextInput
                style={styles.input}
                placeholderTextColor="#999"
                placeholder="Message Body"
                multiline={true}
                onChangeText={(text) =>
                  setNewMessage({ ...newMessage, body: text })
                }
              />
              <View style={styles.modalButtons}>
                <Button
                  title="Cancel"
                  onPress={() => setNewMessageModalVisible(false)}
                />
                <Button title="Submit" onPress={handleNewMessageSubmit} />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Modal>
      <Modal visible={selectedMessage !== null}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedMessage?.subject}</Text>
          <Text style={styles.messageBody}>{selectedMessage?.body}</Text>
          <Button title="Close" onPress={() => setSelectedMessage(null)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalCont: { marginHorizontal: 0, marginTop:200, },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messagesContainer: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 16,
  },
  messageContainer: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  icon: {
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageSubject: {
    fontWeight: "bold",
    fontSize: 16,
  },
  messageSender: {
    fontSize: 14,
    marginBottom: 4,
  },
  messageBody: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
  },
  footerContainer: {
    paddingVertical: 12,
    alignItems: "center",
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#ccc",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    width: "90%",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  picker: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerIOS: {
    flex: 1,
    height: 150, // Adjust the height as needed for iOS
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Inbox;
