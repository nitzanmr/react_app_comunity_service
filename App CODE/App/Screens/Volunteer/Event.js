//improved design so that the events are visually devided,special events are cyan, added transport indicator, made the the feilds clearer -mousa

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

function EventList() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setEvents([
          {
            id: 1,
            title: "אירוע דוגמה 1",
            description: "תיאור אירוע 1",
            date: "25 מאי 2023",
            startTime: "10:00",
            endTime: "15:00",
            totalHours: 5,
            exitLocation: "נקודת יציאה",
            destinationLocation: "מקום פעילות",
            transportation: true,
            special: true,
          },
          {
            id: 2,
            title: "אירוע דוגמה 2",
            description: "תיאור אירוע 2",
            date: "1 יוני 2023",
            startTime: "14:00",
            endTime: "18:00",
            totalHours: 4,
            exitLocation: "נקודת יציאה",
            destinationLocation: "מקום פעילות",
            transportation: false,
            special: false,
          },
          // Add more events here...
        ]);
      } catch (error) {
        console.log("Error fetching events data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>טוען...</Text>
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView style={styles.eventList}>
      {events.map((event) => (
        <View
          key={event.id}
          style={[
            styles.eventContainer,
            event.special && styles.specialEventContainer,
          ]}
        >
          <View style={styles.calendarContainer}>
            <Icon name="calendar" size={30} color="#000" style={styles.calendarIcon} />
          </View>
          <View style={styles.eventBody}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>תאריך:</Text> {event.date}
            </Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>שעת התחלה:</Text> {event.startTime}
            </Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>שעת סיום:</Text> {event.endTime}
            </Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>סה"כ שעות:</Text> {event.totalHours}
            </Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>יציאה מ:</Text> {event.exitLocation}
            </Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>מיקום הפעילות:</Text> {event.destinationLocation}
            </Text>
            <Text style={styles.eventField}>
              <Text style={styles.fieldLabel}>תחבורה מאורגנת:</Text>{" "}
              {event.transportation ? (
                <Text style={styles.checkIcon}>כן</Text>
              ) : (
                <Text style={styles.xIcon}>לא</Text>
              )}
            </Text>
          </View>
        </View>
      ))}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
  },
  eventList: {
    flex: 1,
    padding: 16,
  },
  eventContainer: {
    flexDirection: "row",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor:"white"
  },
  specialEventContainer: {
    backgroundColor: "cyan", // Change the background color of special events
  },
  calendarContainer: {
    marginRight: 10,
  },
  calendarIcon: {
    fontSize: 100,
  },
  eventBody: {
    flex: 1,
    flexDirection: "column",
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 20,
    marginBottom: 8,
  },
  eventField: {
    fontSize: 18,
    marginBottom: 4,
  },
  fieldLabel: {
    fontWeight: "bold",
  },
  checkIcon: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  xIcon: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default EventList;
