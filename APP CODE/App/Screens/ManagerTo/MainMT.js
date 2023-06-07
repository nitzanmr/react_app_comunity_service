import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
            onPress={() => handleNavigate("HoursMan")}
          >
            <Image
              source={require("../../../App/assets/hourSheet.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>hours</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("event")}
          >
            <Image
              source={require("../../../App/assets/events.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("Volunteer")}
          >
            <Image
              source={require("../../../App/assets/volunteerPlaces.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Volunteer Places</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("Certificates")}
          >
            <Image
              source={require("../../../App/assets/certificates.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Certificates</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("pdf")}
          >
            <Image
              source={require("../../../App/assets/pdf.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate("inbox")}
          >
            <Image
              source={require("../../../App/assets/inbox.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Messages</Text>
          </TouchableOpacity>
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
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
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
  },
  buttonText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  footerText: {
    color: "gray",
  },
  line: {
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "gray",
  },
});

export default MainScreen;
