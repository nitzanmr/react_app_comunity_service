import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
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
  const [hours, setHours] = useState({});
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hours data...
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
              29: 5,
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
              1: 2,
              2: 4,
              3: 2,
              4: 3,
              6: 2,
            },
            1: {
              29: 4,
              29: 5,
            },
            2: {
              29: 4,
              29: 5,
            },
          },
        });
      } catch (error) {
        console.log("Error fetching hours data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let totalHours = 0;

  for (const year in hours) {
    for (const month in hours[year]) {
      const monthHours = hours[year][month];
      for (const day in monthHours) {
        totalHours += monthHours[day];
      }
    }
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Show Hours</Text>
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

          <Text style={styles.totalHoursText}>Total Hours: {totalHours}</Text>
          {hours[selectedYear] && hours[selectedYear][selectedMonth] && (
            <View style={styles.hourSheetContainer}>
              {Object.entries(hours[selectedYear][selectedMonth]).map(
                ([day, hour]) => (
                  <View key={day} style={styles.hourSheetItem}>
                    <Text style={styles.dayText}>
                      Date: {selectedYear}/{selectedMonth}/{day}
                    </Text>
                    <Text style={styles.hourText}>Hours: {hour}</Text>
                  </View>
                )
              )}
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.line} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: "#333",
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
    height: 150, // Adjust the height as needed for iOS
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  totalHoursText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  hourSheetContainer: {
    marginTop: 10,
  },
  hourSheetItem: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  dayText: {
    fontSize: 16,
    marginBottom: 5,
  },
  hourText: {
    fontSize: 14,
  },
  footerText: {
    color: "gray",
  },
  line: {
    marginBottom: 20,
    width: "100%",
    height: 1,
    backgroundColor: "gray",
  },
});

export default VolunteerHoursPage;
