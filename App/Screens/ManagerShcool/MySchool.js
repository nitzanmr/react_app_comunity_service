import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const StudentList = ({ navigation }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ]);

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

    const handleEdit = (id, newName) => {
          navigation.navigate("ProfileEdit");

  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text>{item.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ backgroundColor: "red", padding: 5, marginRight: 10 }}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "blue", padding: 5 }}
          onPress={() => handleEdit(item.id, "New Name")}
        >
          <Text style={{ color: "white" }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default StudentList;
