import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    gap: 12,
  },
  nameContainer: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flex: 1,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#e23c44",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
