import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Alb from "./src/Album/Album";
import Search from "./src/Search/SearchBar";
import Play from "./src/Playlist/Playlist";
import Dark from "./src/Mode/Mode";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? "#000" : "#fff" }}>
      <ScrollView>
        <View style={{ position: "absolute", top: 10, left: 15, right: 15, zIndex: 10 }}>
          <Dark darkMode={darkMode} setDarkMode={setDarkMode} />
        </View>
        <Search darkMode={darkMode} />
        <Alb darkMode={darkMode} />
        <Play darkMode={darkMode} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;