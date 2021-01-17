import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppListItemSeparator from "./AppListItemSeparator";
import AppText from "./AppText";

function MyPickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
      <AppListItemSeparator />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default MyPickerItem;
