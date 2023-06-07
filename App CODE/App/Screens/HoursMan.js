import React, { useState } from 'react';
import { View, Text,TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectBox = ({ options, selectedValue, onValueChange }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
    >
      {options.map((option) => (
        <Picker.Item key={option.value} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
};


const VolunteerHoursPage = () => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear().toString());
  const [selectedMonth, setSelectedMonth] = useState((currentDate.getMonth() + 1).toString());
  const [selectedID, setSelectedID] = useState(""); 

  const currentYear = new Date().getFullYear();
  const lastTenYears = Array.from({ length: 10 }, (_, index) => {
  const year = currentYear - index;
  return { label: year.toString(), value: year.toString() };
  });
  const years = lastTenYears;
  
  const months = [
    { label: "Select Month", value: "" },
    { label: "January (1)", value: "1" },
    { label: "February (2)", value: "2" },
    { label: "March (3)", value: "3" },
    { label: "April (4)", value: "4" },
    { label: "May (5)", value: "5" },
    { label: "June (6)", value: "6" },
    { label: "July (7)", value: "7" },
    { label: "August (8)", value: "8" },
    { label: "September (9)", value: "9" },
    { label: "October (10)", value: "10" },
    { label: "November (11)", value: "11" },
    { label: "December (12)", value: "12" },
  ];

  const hours = {
    "2021": {
      "1": {
        "1": 2,
        "2": 4,
        "3": 2,
        "4": 3,
      },
      "2": {
        "29": 4,
        "5": 5,
      },
      "3": {
        "29": 4,
        "29": 5,
      },
    },
    "2023": {
      "5": {
        "29": 4,
        "28": 5,
      },
      "1": {
        "29": 4,
        "29": 5,
      },
      "2": {
        "29": 4,
        "29": 5,
      },
    }
  };

 const handleDelete = (year, month, day) => {
    // Implement the delete functionality here
    console.log('Deleting', year, month, day);
  };

  return (
    <View style={styles.container}>
          <View >
              <TextInput
                style={styles.inputField}
                value={selectedID}
                onChangeText={setSelectedID}
                placeholder="Enter ID"
                  />  
            <View style={styles.inputContainer}>
            <SelectBox options={years} selectedValue={selectedYear} onValueChange={setSelectedYear} />
            <SelectBox options={months} selectedValue={selectedMonth} onValueChange={setSelectedMonth} />
            <Text style={styles.headerText}>{selectedYear}/{selectedMonth} </Text>
      
            </View>
          </View>

      {hours[selectedYear] && hours[selectedYear][selectedMonth] && (
        <View style={styles.hourSheetContainer}>
          {Object.entries(hours[selectedYear][selectedMonth]).map(([day, hour]) => (
            <View key={day} style={styles.hourSheetItem}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(selectedYear, selectedMonth, day)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
              <Text style={styles.dayText}>Date: {selectedYear}/{selectedMonth}/{day}</Text>
              <Text style={styles.hourText}>Hours: {hour}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
      color: '#333',
    paddingTop:20,
  },
   inputField: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  hourSheetContainer: {
    marginTop: 10,
  },
  hourSheetItem: {
    backgroundColor: '#E8E8E8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 16,
    marginBottom: 5,
  },
  hourText: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});



export default VolunteerHoursPage;
