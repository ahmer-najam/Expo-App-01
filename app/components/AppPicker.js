import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";

import defaultStyles from "../config/styles";

import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppScreen from "./AppScreen";
import AppPickerItem from "./AppPickerItem";

function AppPicker2({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  PickerItemComponent = AppPickerItem,
  numberOfColumns = 1,
  ...otherProps
}) {
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
          {selectedItem ? (
            <AppText style={defaultStyles.pickerText}>
              {selectedItem ? selectedItem.label : placeholder}
            </AppText>
          ) : (
            <AppText style={defaultStyles.pickerPlaceHolderText}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.darkGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
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
  placeholder: {
    color: defaultStyles.colors.mediumGrey,
    flex: 1,
  },
});
export default AppPicker2;
