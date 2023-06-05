




import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const events =
    [
        {
            id: 1,
            title: 'Sample Event 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'May 25, 2023',
            location: 'New York City, NY',
            photo: require('../../App/assets/events.png')
        },
        {
            id: 2,
            title: 'Sample Event 2',
            description: 'Pellentesque euismod magna vel faucibus rhoncus.',
            date: 'June 1, 2023',
            location: 'Los Angeles, CA',
            photo: require('../../App/assets/events.png')
        },
    ]




function EventList(props) {
    const handleAttendanceApproval = (event) => {
        // handle attendance approval logic here
        console.log(`Approved attendance for event ${event.title}`);
    };

    return (
        <View style={styles.eventList}>{
            events.map((event) => (
                <View key={event.id} style={styles.event}>
                    <Image source={event.photo} style={styles.eventPhoto} />
                    <View style={styles.eventDetails}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.eventDescription}>{event.description}</Text>
                        <Text style={styles.eventDate}>{event.date}</Text>
                        <Text style={styles.eventLocation}>{event.location}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => handleAttendanceApproval(event)}>
                        <Text style={styles.buttonText}>Attend</Text>
                    </TouchableOpacity>
                </View>
            ))
        }
        </View>
    );
}

const styles = StyleSheet.create({
    eventList: {
        flex: 1,
        padding: 16,
    },
    event: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    eventPhoto: {
        width: 100,
        height: 100,
        marginRight: 16,
        borderRadius: 10,
    },
    eventDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
        color: '#666',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',

    },
});

export default EventList;
