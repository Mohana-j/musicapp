import React from "react";
import { View, Text, Switch } from "react-native";
import styles from "./ModeStyles";

const Dark = ({ darkMode, setDarkMode }) => {
  const toggleSwitch = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log("Dark mode toggled to:", !darkMode);
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      <View style={styles.toggleContainer}>
        <Text style={[styles.darkModeText, { color: darkMode ? "#fff" : "#000" }]}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          value={darkMode}
          onValueChange={toggleSwitch}
          thumbColor={darkMode ? "#8fbc8f" : "lightgrey"} 
          trackColor={{ false: "#767577", true: "#2E8B57" }} 
        />
      </View>
    </View>
  );
};

export default Dark;