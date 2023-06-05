



import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, Modal, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const events = [
    {
        id: 1,
        title: 'lol',
        description: 'day after day',
        date: 'May 25, 2023',
        location: 'New York City, NY',
        photo: require('../../App/assets/events.png'),
    },
    {
        id: 2,
        title: 'why',
        description: 'why the birds fly',
        date: 'June 1, 2023',
        location: 'Los Angeles, CA',
        photo: require('../../App/assets/events.png'),
    },
];

function EventList(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newEvent, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        photo: require('../../App/assets/events.png'),
    });
    const [eventss, setEvents] = useState(events);

    const renderEvents = ({ item }) => {
        return (
            <View key={item.id} style={styles.event}>
                <Image source={item.photo} style={styles.eventPhoto} />
                <View style={styles.eventDetails}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventDescription}>{item.description}</Text>
                    <Text style={styles.eventDate}>{item.date}</Text>
                    <Text style={styles.eventLocation}>{item.location}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handledelete(item)}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const handledelete = (event) => {
        const updatedEvents = eventss.filter((e) => e.id !== event.id);
        setEvents(updatedEvents);
    };

    const handleAddEvent = () => {
        setIsModalVisible(true);
    };

    const handleAddEventSubmit = () => {

        // Create a new message with a unique ID
        const newId = eventss.length + 1;
        const newMessageWithId = { ...newEvent, id: newId };

        // Add the new message to the messages array
        const updatednewEvents = [...eventss, newMessageWithId];
        setEvents(updatednewEvents);
        // messages.push(updatedMessages);

        // Reset the new message state and close the modal
        setEvent({
            title: '',
            description: '',
            date: '',
            location: '',
            photo: require('../../App/assets/events.png'),
        });



        // handle adding new event logic here
        console.log('Add New Event button pressed');
        setIsModalVisible(false);
    };
    return (
        <View style={styles.eventList}>
            {

                <FlatList
                    data={eventss}
                    renderItem={renderEvents}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.separator} />
                    }
                />
            }
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddEvent()}>
                <Text style={styles.addButton}>Add Newss Event</Text>
            </TouchableOpacity>

            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Add New Event</Text>
                    <View style={styles.modalContent}>
                        <TextInput
                            onChangeText={(text) => setEvent({ ...newEvent, title: text })}
                            style={styles.modalInput} placeholder="Event Title" />
                        <TextInput
                            onChangeText={(text) => setEvent({ ...newEvent, description: text })}
                            style={styles.modalInput} placeholder="Event Description" />
                        <TextInput
                            onChangeText={(text) => setEvent({ ...newEvent, date: text })}
                            style={styles.modalInput} placeholder="Event Date" />
                        <TextInput
                            onChangeText={(text) => setEvent({ ...newEvent, location: text })}
                            style={styles.modalInput} placeholder="Event Location" />
                    </View>

                    <View style={styles.modalButtons}>
                        <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
                        <Button title="Submit" onPress={() => handleAddEventSubmit()} />
                    </View>
                </View>
            </Modal>
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
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        padding: 8,
    },
    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    modalContent: {
        width: '100%',
    },
    modalInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 32,
        width: '100%',
    },
    modalButton: {
        width: '40%',
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    submitButton: {
        backgroundColor: '#00bfff',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EventList;
