import React, { useState } from "react";
import { View, Text, SectionList, Modal, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./PlaylistStyle";

const DATA = [
  { title: "Favorites", data: [{ title: "Ocean Breeze", description: "Wind Ensemble" }, { title: "Mountain Echoes", description: "Nature Sounds" }] },
  { title: "Recently Played", data: [{ title: "Urban Rhythm", description: "City Beats" }, { title: "Sunset Groove", description: "Jazz Collective" }] },
];

const Play = ({ darkMode }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const handlePausePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSongPress = (item) => {
    setSelectedSong(item);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.header, { color: darkMode ? "#fff" : "#000" }]}>Playlists</Text>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSongPress(item)}>
            <View style={[styles.card, darkMode ? styles.darkCard : styles.lightCard]}>
              <Text style={[styles.songTitle, { color: darkMode ? "#fff" : "#000" }]}>{item.title}</Text>
              <Text style={[styles.songDescription, { color: darkMode ? "#888" : "grey" }]}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.sectionTitle, { color: darkMode ? "#fff" : "#000" }]}>{title}</Text>
        )}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      />
      <TouchableOpacity
        style={loading ? styles.hiddenButton : styles.pauseButton}
        onPress={handlePausePress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <Text style={styles.pauseButtonText}>PAUSE</Text>
        )}
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.modalOverlay, { backgroundColor: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.5)" }]}>
          <View style={[styles.modalContainer, darkMode ? styles.darkModal : styles.lightModal]}>
            {selectedSong && (
              <>
                <Text style={[styles.modalTitle, { color: darkMode ? "#fff" : "#000" }]}>{selectedSong.title}</Text>
                <Text style={[styles.modalDescription, { color: darkMode ? "#888" : "#666" }]}>{selectedSong.description}</Text>
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Play;