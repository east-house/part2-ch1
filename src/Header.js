import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <View styl={styles.icons}>
      <Ionicons name={props.name} size={24} color="black" />
    </View>
  );
};

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구!! </Text>
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
    backgroundColor: "lightgreen",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  icons: {
    paddingHorizontal: 6,
  },
});
