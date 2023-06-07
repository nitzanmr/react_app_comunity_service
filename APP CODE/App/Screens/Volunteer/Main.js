import React from 'react';
import { View, Text,  TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const MainScreen = ({ navigation }) => {

    const handleNavigate = (screenName) => {
        navigation.navigate(screenName);
    }
    const handleProfile = () => {
        navigation.navigate('Profile');
    }
    return (
      <View style={styles.container}>
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
            onPress={() => handleNavigate("Hours")}
          >
            <Icon name="clock-o" size={100} />

            <Text style={styles.buttonText}>hours</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("Event")}
          >
            <Icon name="calendar" size={90} color="#000" />

            <Text style={styles.buttonText}>Events</Text>
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
        </View>
        <View style={styles.line} />

        <View style={styles.footerContainer}>
          <View style={styles.line} />
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },

  profileButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  backgroundImage: {
    height: 100,
    width: 150,
    marginBottom: 30,
    marginTop: 30,
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
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  line: {
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "gray",
  },
});


export default MainScreen;
