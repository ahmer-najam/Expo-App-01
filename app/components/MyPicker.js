import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet, Modal, Button } from "react-native";
import AppText from "./AppText";

import defaultStyles from "../config/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function MyPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              style={defaultStyles.icon}
              color={defaultStyles.colors.darkGrey}
            />
          )}
          <AppText style={defaultStyles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.medium,
    borderRadius: 25,
    //flex: 1,
    flexDirection: "row",
    width: "80%",
    padding: 15,
    // margin: 10,
  },
});
export default MyPicker;
