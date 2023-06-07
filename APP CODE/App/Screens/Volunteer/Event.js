import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function EventList() {
  const [loading, setLoading] = useState(true);
  const [eventss, setEvent] = useState([]);
  const [reEvents, setReEvents] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setReEvents([
          {
            id: 1,
            title: "lol",
            description: "day after day",
            fromDate: "May 25, 2023",
            toDate: "May 25, 2024",
            volunteerPlace: "City",
            daysWeekly: ["Sunday", "Monday"],
            hours: 5,
            approvedDay: [],
          },
        ]);
        setEvent([
          {
            id: 1,
            title: "lol",
            description: "day after day",
            date: "May 25, 2023",
            location: "New York City, NY",
            hours: 5,
          },
          {
            id: 2,
            title: "why",
            description: "why the birds fly",
            date: "June 1, 2023",
            location: "Los Angeles, CA",
            hours: 5,
          },
          {
            id: 3,
            title: "why",
            description: "why the birds fly",
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
const renderEvents = ({ item }) => {
  return (
    <View key={item.id} style={styles.event}>
      <Icon name="calendar" size={70} color="#000" style={styles.eventPhoto} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
        <Text style={styles.eventLocation}>{item.location}</Text>
        <Text>hours : {item.hours}</Text>
      </View>
    </View>
  );
};

const renderReEvents = ({ item }) => {
  return (
    <View key={item.id} style={styles.event}>
      <Icon name="calendar" size={70} color="#000" style={styles.eventPhoto} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <Text style={styles.eventDate}>Start Date : {item.fromDate}</Text>
        <Text style={styles.eventDate}>to Date :{item.toDate}</Text>
        <Text style={styles.eventLocation}>
          volunteer at : {item.volunteerPlace}
        </Text>
        <Text>hours : {item.hours}</Text>
      </View>
      <View>
      </View>
    </View>
  );
};


  return (
    <View style={styles.eventList}>
      <Text style={styles.title}>אירועים מיוחדים</Text>
      <View style={styles.footerContainer}>
        <View style={styles.line} />
      </View>
      <FlatList
        data={eventss}
        renderItem={renderEvents}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Text style={styles.title}>התנדבויות שבועיות</Text>
      <View style={styles.footerContainer}>
        <View style={styles.line} />
      </View>
      <FlatList
        data={reEvents}
        renderItem={renderReEvents}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.buttonContainer}>
      </View>
    </View>
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
