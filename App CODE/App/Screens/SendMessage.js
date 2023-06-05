import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
function ChatWindow() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi there!", destination: "Other" },
    { text: "Hello!", destination: "Me" },
  ]);
  const [destination, setDestination] = useState("");

  function handleChange(text) {
    setMessage(text);
  }

  function handleSend() {
    const newMessage = {
      text: message,
      destination: destination === "Me" ? "Other" : "Me",
    };
    setMessages([...messages, newMessage]);
    setMessage("");
    setDestination(newMessage.destination);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat Window</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.destination === "Me" ? styles.myMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.destination}>{item.destination}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={message}
            onChangeText={handleChange}
            placeholder="Type your message here..."
            style={styles.input}
          />
          <Button title="Send" onPress={handleSend} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  messageContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    maxWidth: "80%",
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  destination: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#E5E5EA",
    borderRadius: 20,
    marginRight: 10,
  },
});

export default ChatWindow;
