import React from "react";
import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function MyErrors({ error, visiable }) {
  if (!visiable || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default MyErrors;
