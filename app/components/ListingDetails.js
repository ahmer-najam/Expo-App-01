import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import ListItem from "./ListItem";

function ListingDetails(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for Sale!</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/UserAvatar01.jpg")}
            title="Ahmer Najam"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    overflow: "hidden",
  },
  subTitle: {
    marginBottom: 7,
    color: colors.secondary,
    fontWeight: "400",
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 7,
    color: colors.black,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetails;
