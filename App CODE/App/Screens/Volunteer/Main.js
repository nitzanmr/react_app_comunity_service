import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
          <Image
            source={require("../../../App/assets/th.jpeg")}
            style={styles.profileIcon}
          />
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
            onPress={() => handleNavigate("event")}
          >
            <Icon name="calendar" size={90} color="#000" />

            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("Volunteer")}
          >
            <Icon name="handshake-o" size={90} color="#000" />

            <Text style={styles.buttonText}>Volunteer Places</Text>
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

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            All rights reserved
          </Text>
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
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginTop: 5,
  },
});


export default MainScreen;
