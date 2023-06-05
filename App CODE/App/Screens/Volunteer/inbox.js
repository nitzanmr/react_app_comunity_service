import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Modal,
  TextInput,
  Button,
} from "react-native";

const Inbox = ({ navigation }) => {
  const [newMessageModalVisible, setNewMessageModalVisible] = useState(false);
  const [newMessage, setNewMessage] = useState({
    subject: "",
    receiver: "",
    body: "",
  });

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
            sender: "ADMIN",
            masseges: [
              { text: "Hi there!", destination: "Other" },
              { text: "Hello!", destination: "Me" },
            ],
            body: "Just a reminder that we have a meeting tomorrow at 2 PM.",
          },
          {
            id: 2,
            subject: "Vacation Request",
            receiver: "Jane Smith",
            body: "Hi, I wanted to request some time off next week for a family vacation.",
          },
          {
            id: 3,
            subject: "New Project Proposal",
            receiver: "Bob Johnson",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
          {
            id: 4,
            subject: "New Project Proposal",
            receiver: "Bob Johnson",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
          {
            id: 5,
            subject: "New Project Proposal",
            receiver: "Bob Johnson",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
          {
            id: 6,
            subject: "New Project Proposal",
            receiver: "Bob Johnson",
            body: "I have a new project proposal that I would like to discuss with you.",
          },
          {
            id: 7,
            subject: "New Project Proposal",
            receiver: "Bob Johnson",
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

  const renderMessage = ({ item }) => {
    const handlePress = () => {
      navigation.navigate("SendMessage", { message: item });
    };

    return (
      <View style={styles.messageContainer} onPress={handlePress}>
        <Text style={styles.messageSubject}>{item.subject}</Text>
        <Text style={styles.messageSender}>{item.receiver}</Text>
        <Text style={styles.messageBody}>{item.body}</Text>
      </View>
    );
  };

  const handleNewMessage = () => {
    setNewMessageModalVisible(true);
  };

  const handleNewMessageSubmit = () => {
    // Create a new message with a unique ID
    const newId = messages.length + 1;
    const newMessageWithId = { ...newMessage, id: newId };

    // Add the new message to the messages array
    const updatedMessages = [...messages, newMessageWithId];
    setMessages(updatedMessages);

    // Reset the new message state and close the modal
    setNewMessage({ subject: "", receiver: "", body: "" });
    setNewMessageModalVisible(false);
  };

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
        </View>
      )}
      <Modal visible={newMessageModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>New Message</Text>
          <TextInput
            style={styles.input}
            placeholder="Subject"
            onChangeText={(text) =>
              setNewMessage({ ...newMessage, subject: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Receiver"
            onChangeText={(text) =>
              setNewMessage({ ...newMessage, receiver: text })
            }
          />
          <TextInput
            style={styles.input}
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
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  messagesContainer: {
    flex: 1,
  },
  messageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  messageSubject: {
    fontSize: 18,
    fontWeight: "bold",
  },
  messageSender: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
  },
  messageContent: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  subject: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  receiver: {
    fontSize: 18,
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 18,
    color: "#999",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Inbox;
