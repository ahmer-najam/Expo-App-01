import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { AppText } from "./AppText";
import colors from "../config/colors";

function AppCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    marginBottom: 7,
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
    color: colors.black,
  },
});

export default AppCard;
