import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red Jacket for Sale!!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$ " + item.price}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    padding: 20,
    backgroundColor: colors.medium,
  },
});

export default ListingScreen;
