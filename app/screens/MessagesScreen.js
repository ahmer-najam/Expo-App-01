import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import AppListItemSeparator from "../components/AppListItemSeparator";
import AppListItemDelete from "../components/AppListItemDelete";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setrefreshing] = useState(false);

  const handleDeleteMessage = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("List item pressed")}
            renderRightActions={() => (
              <AppListItemDelete onPress={() => handleDeleteMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={AppListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messages,
            {
              id: messages.length + 1,
              title: "T" + messages.length + 1,
              description: "D" + messages.length + 1,
              image: require("../assets/UserAvatar01.jpg"),
            },
          ]);
        }}
      />
    </AppScreen>
  );
}

export default MessagesScreen;
