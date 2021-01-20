import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
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
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MyCard from "./app/components/MyCard";
import AppTextInput from "./app/components/AppTextInput";

import MyPicker2 from "./app/components/MyPicker2";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const item = {
  id: 1,
  title: "Red Jacket for Sale!!",
  price: 100,
  image: require("./app/assets/jacket.jpg"),
};

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  return (
    // <View style={styles.container}>
    //   <MyPicker2
    //     selectedItem={category}
    //     onSelectItem={(category) => setCategory(category)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </View>

    <ListingEditScreen />
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
