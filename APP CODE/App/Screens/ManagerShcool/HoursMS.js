import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SelectBox = ({ options, selectedValue, onValueChange }) => {
  const pickerStyle = Platform.OS === "ios" ? styles.pickerIOS : styles.picker;

  return (
    <Picker
      style={pickerStyle}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
    >
      {options.map((option) => (
        <Picker.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Picker>
  );
};

const VolunteerHoursPage = () => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(
    currentDate.getFullYear().toString()
  );
  const [selectedMonth, setSelectedMonth] = useState(
    (currentDate.getMonth() + 1).toString()
  );
  const [selectedID, setSelectedID] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [hours, setHours] = useState({});

  const currentYear = new Date().getFullYear();
  const lastTenYears = Array.from({ length: 2 }, (_, index) => {
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



const handleDelete = (year, month, day) => {
  setHours((prevHours) => {
    const updatedHours = { ...prevHours };
    if (updatedHours[year] && updatedHours[year][month]) {
      delete updatedHours[year][month][day];

      // If there are no more entries for the selected month and year, remove the month entry
      if (Object.keys(updatedHours[year][month]).length === 0) {
        delete updatedHours[year][month];

        // If there are no more entries for the selected year, remove the year entry
        if (Object.keys(updatedHours[year]).length === 0) {
          delete updatedHours[year];
        }
      }
    }
    return updatedHours;
  });
};


  const handleSearch = () => {
    setHours({
      2021: {
        1: {
          1: 2,
          2: 4,
          3: 2,
          4: 3,
        },
        2: {
          29: 4,
          5: 5,
        },
        3: {
          29: 4,
          29: 5,
        },
      },
      2023: {
        5: {
          29: 4,
          28: 5,
        },
        1: {
          29: 4,
          29: 5,
        },
        2: {
          29: 4,
          23: 5,
          24: 5,
          25: 5,
          26: 5,
          27: 5,
          28: 5,
          20: 5,
          11: 5,
          12: 5,
          13: 5,
          14: 5,
          15: 5,
          17: 5,
          18: 5,
          19: 5,
          0: 5,
          1: 5,
        },
      },
    });
    setSelectedID("ss");
    console.log("Searching for ID:", searchValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Enter ID"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <SelectBox
          options={years}
          selectedValue={selectedYear}
          onValueChange={setSelectedYear}
        />
        <SelectBox
          options={months}
          selectedValue={selectedMonth}
          onValueChange={setSelectedMonth}
        />
      </View>

      {selectedID != "" &&
        hours[selectedYear] &&
        hours[selectedYear][selectedMonth] && (
          <KeyboardAwareScrollView style={styles.hourSheetContainer}>
            {Object.entries(hours[selectedYear][selectedMonth]).map(
              ([day, hour]) => (
                <View key={day} style={styles.hourSheetItem}>
                  <Text style={styles.dayText}>
                    Date: {selectedYear}/{selectedMonth}/{day}
                  </Text>
                  <Text style={styles.hourText}>Hours: {hour}</Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() =>
                      handleDelete(selectedYear, selectedMonth, day)
                    }
                  >
                    <Ionicons name="trash-outline" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )
            )}
          </KeyboardAwareScrollView>
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputField: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "#333",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 5,
  },
  picker: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerIOS: {
    flex: 1,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  hourSheetContainer: {
    marginTop: 10,
  },
  hourSheetItem: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dayText: {
    fontSize: 16,
    marginBottom: 5,
  },
  hourText: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#333",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  line: {
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "gray",
  },
});

export default VolunteerHoursPage;
