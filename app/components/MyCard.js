import React from "react";
import { StyleSheet, Image, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function MyCard({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default MyCard;
