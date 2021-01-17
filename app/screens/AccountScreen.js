import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppScreen from "../components/AppScreen";
import AppIcon from "../components/AppIcon";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppListItemSeparator from "../components/AppListItemSeparator";

const menuItems = [
  {
    title: "My Listing",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];

function AccountScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ahmer Najam"
          subTitle="ahmer.najam@gmail.com"
          image={require("../assets/AhmerProfile.jpg")}
        />
        <AppListItemSeparator />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <AppListItemSeparator />
        <ListItem
          title="Logout"
          IconComponent={
            <AppIcon
              name="logout"
              backgroundColor={colors.cream}
              iconColor={colors.black}
            />
          }
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.medium,
  },
});

export default AccountScreen;
