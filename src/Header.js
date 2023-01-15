import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Margin from "./Margin";

const IconButton = (props) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20 }}
      styl={{
        paddingHorizontal: 6,
        backgroundColor: "lightblue",
      }}
    >
      <Ionicons name={props.name} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구 </Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search" />
        <IconButton name="person" />
        <IconButton name="musical-notes" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    // backgroundColor: "lightgreen",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  icons: {
    paddingHorizontal: 6,
    backgroundColor: "lightblue",
  },
});
