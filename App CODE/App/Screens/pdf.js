import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, PermissionsAndroid, Platform } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';


function Pdf(props) {
    const [pdfList, setPdfList] = useState([]);

    // Fetch PDF data from server or local storage
    useEffect(() => {
        // Your code here to fetch the PDF data, which should be an array of objects containing a name, photo URL, and description for each PDF
        // Example data:
        const pdfData = [
            {
                name: 'PDF 1',
                photo: require('../../App/assets/pdf.png'),
                description: 'description 1'
            },
            {
                name: 'PDF 2',
                photo: require('../../App/assets/pdf.png'),
                description: 'description 2'
            },
            {
                name: 'PDF 3',
                photo: require('../../App/assets/pdf.png'),
                description: 'description 3'
            },
        ];
        setPdfList(pdfData);
    }, []);

    // Request permission to access storage on Android
    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission',
                    message: 'This app needs permission to access your device storage in order to download PDFs.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Storage permission granted');
            } else {
                console.log('Storage permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    // // Download a PDF
    // const downloadPdf = (pdfUrl, pdfName) => {
    //     // Request storage permission on Android
    //     if (Platform.OS === 'android') {
    //         requestStoragePermission();
    //     }

    //     // Download PDF with RNFetchBlob
    //     RNFetchBlob.config({
    //         fileCache: true,
    //         addAndroidDownloads: {
    //             useDownloadManager: true,
    //             notification: true,
    //             path: `${RNFetchBlob.fs.dirs.DownloadDir}/${pdfName}.pdf`,
    //             description: 'Downloading PDF...',
    //         },
    //     })
    //         .fetch('GET', pdfUrl)
    //         .then((res) => {
    //             console.log('PDF downloaded');
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // };

    // Render item in the PDF list
    const renderPdfItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.pdfItem} onPress={() => downloadPdf(item.pdfUrl, item.name)}>
                <Image style={styles.pdfPhoto} source={item.photo} />
                <View style={styles.pdfInfo}>
                    <Text style={styles.pdfName}>{item.name}</Text>
                    <Text style={styles.pdfDescription}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={pdfList}
                renderItem={renderPdfItem}
                keyExtractor={(item) => item.name}
            />
        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    pdfItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    pdfPhoto: {
        width: 80,
        height: 80,
        marginRight: 10,
        resizeMode: 'cover',
    },
    pdfInfo: {
        flex: 1,
    },
    pdfName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    pdfDescription: {
        fontSize: 14,
        color: '#666',
    },
});


export default Pdf;

