import React, { useState, useEffect } from "react";
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
// import {collection , doc, getDoc,setDoc} from 'firebase/firestore'
// import { firebase } from "@react-native-firebase/auth";
// import { FIREBASE_AUTH, FIREBASE_DB }from "./firebaseConfig"


function EventList() {
  const [loading, setLoading] = useState(true);
  const [events, setEvent] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setEvent([
          {
            id: 1,
            title: "Sample Event 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "May 25, 2023",
            location: "New York City, NY",
            hours: 5,
          },
          {
            id: 2,
            title: "Sample Event 2",
            description: "Pellentesque euismod magna vel faucibus rhoncus.",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
          ,
          {
            id: 3,
            title: "Sample Event 2",
            description: "Pellentesque euismod magna vel faucibus rhoncus.",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
          ,
          {
            id: 4,
            title: "Sample Event 2",
            description: "Pellentesque euismod magna vel faucibus rhoncus.",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
          ,
          {
            id: 5,
            title: "Sample Event 2",
            description: "Pellentesque euismod magna vel faucibus rhoncus.",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
          ,
          {
            id: 6,
            title: "Sample Event 2",
            description: "Pellentesque euismod magna vel faucibus rhoncus.",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
          ,
          {
            id: 7,
            title: "Sample Event 2",
            description: "Pellentesque euismod magna vel faucibus rhoncus.",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
        ]);
      } catch (error) {
        console.log("Error fetching hours data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


if (loading) {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}



  return (
    <KeyboardAwareScrollView style={styles.eventList}>
      {events.map((event) => (
        <View key={event.id} style={styles.event}>
          <Icon
            name="calendar"
            size={70}
            color="#000"
            style={styles.eventPhoto}
          />

          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventLocation}>{event.location}</Text>
            <Text style={styles.eventHours}>Hours: {event.hours}</Text>
          </View>
        </View>
      ))}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  eventList: {
    flex: 1,
    padding: 16,
  },
  event: {
    flexDirection: "row",
    marginBottom: 16,
  },
  eventPhoto: {
    width: 100,
    height: 100,
    margin: 5,
  },
  eventDetails: {
    flex: 1,
    justifyContent: "center",
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 14,
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    },
  eventHours: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default EventList;
