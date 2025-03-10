import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 90,
    left: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "transparent",
  },
  input: {
    fontSize: 16,
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  lightInput: {
    backgroundColor: "#f5f5f5",
    color: "#000",
  },
  darkInput: {
    backgroundColor: "#333",
    color: "#fff",
  },
});