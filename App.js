import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import ListingDetails from "./app/components/ListingDetails";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppScreen from "./app/components/AppScreen";
import AppIcon from "./app/components/AppIcon";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";

export default function App() {
  // return <WelcomeScreen />;
  return (
    // <View style={styles.cardContainer}>
    //   <AppCard
    //     title="Red Jacket for sale!"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    <AppScreen>
      <ListItem
        title="My Title"
        subTitle="My Sub Title"
        ImageComponent={
          <AppIcon name="email" size={50} backgroundColor="tomato" />
        }
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
  },
});
