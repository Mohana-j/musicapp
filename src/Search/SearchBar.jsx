import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "./SearchBarStyles";

const Search = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
        placeholder="Search music, artists, albums"
        placeholderTextColor="grey"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        autoFocus={true}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default Search;