import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, WebView } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const PdfScreen = () => {
    const [pdfUrl, setPdfUrl] = useState('');
    const pdfRef = useRef(null);

    const generatePdf = async () => {
        const html = `
      <html>
        <body>
          <h1>My Dynamic PDF</h1>
          <p>This PDF was generated dynamically using React Native and Expo.</p>
          <p>Here's some more text to fill out the PDF.</p>
        </body>
      </html>
    `;

        const options = {
            html,
            base64: true,
        };

        const pdf = await Print.printToFileAsync(options);
        setPdfUrl(pdf.uri);
        pdfRef.current = pdf;
    };

    const handleDownload = async () => {
        if (!pdfRef.current) {
            return;
        }

        const downloadUrl = pdfRef.current.uri;
        const filename = 'my-pdf.pdf';

        await Sharing.shareAsync(downloadUrl, {
            mimeType: 'application/pdf',
            dialogTitle: 'Download PDF',
            UTI: 'com.adobe.pdf',
            filename,
        });
    };

    return (
        <View style={styles.container}>
            {pdfUrl ? (
                <WebView source={{ uri: pdfUrl }} style={styles.pdfView} />
            ) : (
                <View style={styles.emptyView}>
                    <Text style={styles.emptyText}>No PDF generated yet.</Text>
                </View>
            )}
            <View style={styles.buttonContainer}>
                <Button title="Generate PDF" onPress={generatePdf} />
                <Button title="Download PDF" onPress={handleDownload} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    pdfView: {
        flex: 1,
    },
    emptyView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
    },
});

export default PdfScreen;
