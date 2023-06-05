import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Volunteer Place 1',
        location: '123 Main Street, Anytown USA',
        description: 'This is a description of Volunteer Place 1.',
        image: require('../../App/assets/volunteerPlaces.png')
    },
    {
        id: '2',
        title: 'Volunteer Place 2',
        location: '456 Elm Street, Anytown USA',
        description: 'This is a description of Volunteer Place 2.',
        image: require('../../App/assets/volunteerPlaces.png')
    },
    {
        id: '3',
        title: 'Volunteer Place 3',
        location: '789 Oak Street, Anytown USA',
        description: 'This is a description of Volunteer Place 3.',
        image: require('../../App/assets/volunteerPlaces.png')
    },
];

const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);

const VolunteerPlacesScreen = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#DDDDDD' : '#FFFFFF';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 4,
        padding: 8,
    },
    itemImage: {
        width: 100,
        height: 100,
        marginRight: 8,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    itemLocation: {
        fontSize: 16,
        color: '#999999',
        marginBottom: 8,
    },
    itemDescription: {
        fontSize: 16,
        marginBottom: 8,
    },
    registerButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default VolunteerPlacesScreen;
