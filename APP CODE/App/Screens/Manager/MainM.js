import React from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MainScreen = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleTransport = () => {
    navigation.navigate("Transport");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
        <Icon name="user-circle" size={50} color="#000" />
      </TouchableOpacity>
      <Image
        source={require("../../../App/assets/logo.webp")}
        style={styles.backgroundImage}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate("HoursMan")}
        >
          <Icon name="clock-o" size={100} />

          <Text style={styles.buttonText}>hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate("EventMS")}
        >
          <Icon name="calendar" size={90} color="#000" />

          <Text style={styles.buttonText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate("Volunteer")}
        >
          <Icon name="handshake-o" size={90} color="#000" />

          <Text style={styles.buttonText}>Schools Manager</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate("Certificates")}
        >
          <Icon
            name="graduation-cap"
            type="font-awesome"
            size={90}
            color="black"
          />

          <Text style={styles.buttonText}>Certificates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate("pdf")}
        >
          <Icon name="file" size={90} color="black" />

          <Text style={styles.buttonText}>PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigate("inbox")}
        >
          <Icon name="envelope" size={90} color="black" />

          <Text style={styles.buttonText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleTransport}>
          <Icon name="car" size={90} color="black" />

          <Text style={styles.buttonText}>Transport</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleTransport}>
          <Icon name="bar-chart" size={80} color="#000" />

          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>All rights reserved</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
  },

  profileButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  backgroundImage: {
    height: 200,
    width: 300,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  footerContainer: {
    marginTop: 20,
  },
  footerText: {
    fontWeight: "bold",
    color: "gray",
  },
});

export default MainScreen;
