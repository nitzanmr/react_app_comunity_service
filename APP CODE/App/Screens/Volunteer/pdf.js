import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Pdf() {
  const [pdfList, setPdfList] = useState([]);

  // Fetch PDF data from server or local storage
  useEffect(() => {
    // Your code here to fetch the PDF data, which should be an array of objects containing a name, photo URL, description, and pdfUrl for each PDF
    // Example data:
    const pdfData = [
      {
        name: "PDF 1",
        description: "description 1",
        pdfUrl:
          "https://leoro.org.il/wp-content/uploads/2021/10/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA-%D7%9C%D7%92%D7%99%D7%9C-%D7%94%D7%96%D7%94%D7%91-%D7%97%D7%93%D7%A9-1.pdf",
      },
      {
        name: "PDF 2",
        description: "description 2",
        pdfUrl: "https://example.com/pdf2.pdf",
      },
      // ...rest of the PDF data
    ];
    setPdfList(pdfData);
  }, []);

  const downloadPdf = (url) => {
    Linking.openURL(url);
  };

  const renderPdfItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.pdfItem}
        onPress={() => downloadPdf(item.pdfUrl)}
      >
        <Icon name="file" size={90} color="black" style={styles.pdfPhoto} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  pdfItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  pdfPhoto: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  pdfInfo: {
    flex: 1,
  },
  pdfName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  pdfDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default Pdf;
