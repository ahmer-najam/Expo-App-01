import React from "react";
import { FlatList } from "react-native";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/UserAvatar01.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/UserAvatar01.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
    />
  );
}

export default MessagesScreen;
