import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" translucent />
      <Home />
    </Fragment>
  );
}
