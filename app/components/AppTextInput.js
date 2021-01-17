import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          style={defaultStyles.icon}
          color={defaultStyles.colors.darkGrey}
        />
      )}
      <TextInput style={defaultStyles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.medium,
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});
export default AppTextInput;
