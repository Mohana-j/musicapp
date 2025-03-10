import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Appearance,
  Modal,
} from "react-native";
import styles from "./AlbumStyles";

const screenWidth = Dimensions.get("window").width;

const albums = [
  { id: "1", title: "Midnight Melodies", description: "Luna Sounds", image: require("../../assets/Melodies.jpg") },
  { id: "2", title: "Electric Waves", description: "Voltage Crew", image: require("../../assets/EW.webp") },
];

const Alb = ({ darkMode }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState("");

  useEffect(() => {
    console.log("Alb component mounted");
    console.log("Screen width:", screenWidth);
    return () => console.log("Alb component unmounted");
  }, []);

  const handlePress = (albumTitle) => {
    console.log("Album clicked:", albumTitle);
    setSelectedAlbum(albumTitle);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
    console.log("OK Pressed");
  };

  const albumCardWidth = 220;
  const marginRight = 15;
  const snapInterval = albumCardWidth + marginRight;

  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.header, { color: darkMode ? "#fff" : "#000" }]}>Top Albums</Text>
      <FlatList
        data={albums}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={snapInterval}
        contentContainerStyle={{ paddingLeft: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.title)} activeOpacity={0.7}>
            <View style={[styles.albumCard, darkMode ? styles.darkCard : styles.lightCard]}>
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.title, { color: darkMode ? "#fff" : "#000" }]}>{item.title}</Text>
              <Text style={[styles.description, { color: darkMode ? "#888" : "grey" }]}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        style={{ flexGrow: 0 }}
      />

      {/* Custom Alert Modal */}
      <Modal
        visible={alertVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeAlert}
      >
        <View style={styles.alertWrapper}>
          <View
            style={[
              styles.alertContainer,
              darkMode ? styles.darkAlert : styles.lightAlert,
            ]}
          >
            <Text
              style={[
                styles.alertTitle,
                { color: darkMode ? "#fff" : "#000" },
              ]}
            >
              Album Selected
            </Text>
            <Text
              style={[
                styles.alertMessage,
                { color: darkMode ? "#aaa" : "#666" },
              ]}
            >
              {selectedAlbum}
            </Text>
            <TouchableOpacity style={styles.alertButton} onPress={closeAlert}>
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Alb;