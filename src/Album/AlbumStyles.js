import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 170, 
  },
  lightBackground: {
    backgroundColor: "#fff",
  },
  darkBackground: {
    backgroundColor: "#000",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 9,
  },
  albumCard: {
    borderRadius: 10,
    width: 220,
    marginRight: 18,
  },
  lightCard: {
    backgroundColor: "#f5f5f5",
  },
  darkCard: {
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: 220,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 3,
    marginBottom: 9,
    marginLeft: 8,
  },

  // ✅ Alert Styles (Updated)
  alertWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
  },
  alertContainer: {
    width: 280,
    padding: 20,
    borderRadius: 0,
    alignItems: "center",
  },
  lightAlert: {
    backgroundColor: "#fff",
    
  },
  darkAlert: {
    backgroundColor: "#333",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#aaa", // White text color
    marginBottom: 5,
    marginLeft:-90,
  },
  alertMessage: {
    fontSize: 16,
    color: "#aaa", // Light gray text color
    marginBottom: 15,
    marginLeft:-90,
  },
  alertButton: {
    alignSelf: "flex-end",
    padding: 8,
  },
  alertButtonText: {
    fontSize: 16,
    color: "lightblue", // Matches the "OK" color in the image
    fontWeight: "bold",
  },
});
